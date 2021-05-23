<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create(array $input)
    {
        Validator::make($input, [
            'name' => ['required', 'string', 'max:50', 'min:3'],
            'lastname' => ['required', 'string', 'max:50', 'min:3'],
            'mobil' => ['required', Rule::unique(User::class),'numeric','integer','digits_between:10,12'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class),
            ],
            'password' => $this->passwordRules(),
            'terms' => ['accepted']
        ])->validate();

        $name = ucwords(strtolower($input['name']));
        $lastname = ucwords(strtolower($input['lastname']));

        return User::create([
            'name' => $name,
            'lastname' => $lastname,
            'mobil' => $input['mobil'],
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
        ]);
    }
}
