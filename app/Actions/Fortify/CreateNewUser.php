<?php

namespace App\Actions\Fortify;

use App\Models\Team;
use App\Models\User;
use App\Notifications\Welcome;
use Laravel\Jetstream\Jetstream;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create(array $input)
    {
        Validator::make($input, [
            'name' => ['required', 'string', 'max:100', 'min:3'],
            'lastname' => ['required', 'string', 'max:100', 'min:3'],
            'mobil' => ['required', 'unique:users','numeric','integer','digits:10'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => $this->passwordRules(),
            'terms' => ['required', 'accepted'],
            //'terms' => Jetstream::hasTermsAndPrivacyPolicyFeature() ? ['accepted', 'required'] : '',
        ])->validate();

        $name = ucwords(strtolower($input['name']));
        $lastname = ucwords(strtolower($input['lastname']));

        $user = User::create([
            'name' => $name,
            'lastname' => $lastname,
            'mobil' => $input['mobil'],
            'email' => $input['email'],
            'password' => Hash::make($input['password'])
        ])->assignRole('Usuario');

        $user->requirementUser()->create([
            'policy' => 'accepted',
            'terms' => 'accepted'
        ]);

        $user->notify(new Welcome($name, $lastname));

        return $user;
    }

    /**
     * Create a personal team for the user.
     *
     * @param  \App\Models\User  $user
     * @return void
     */
    protected function createTeam(User $user)
    {
        $user->ownedTeams()->save(Team::forceCreate([
            'user_id' => $user->id,
            'name' => explode(' ', $user->name, 2)[0]."'s Team",
            'personal_team' => true,
        ]));
    }
}
