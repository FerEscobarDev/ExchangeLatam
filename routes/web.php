<?php

use Inertia\Inertia;
use GuzzleHttp\Middleware;
use Illuminate\Routing\RouteGroup;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\RateController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\NoticeController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\DepositController;
use App\Http\Controllers\CampaignController;
use App\Http\Controllers\FormFundController;
use App\Http\Controllers\MessagingController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\WithdrawalController;
use App\Http\Controllers\DollarPriceController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\VerificationController;
use App\Http\Controllers\WalletAccountController;
use App\Http\Controllers\DollarPurchaseController;
use App\Http\Controllers\WalletExchangeController;
use App\Http\Controllers\FormKnowledgeClientController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
}); */

Route::get('/campaigns/vip', [CampaignController::class, 'pautaVip'])->name('campaign.pautaVip')->middleware('route.users');
Route::get('/campaigns/sorteoAniversario', [CampaignController::class, 'sorteoAniversario'])->name('campaign.sorteoAniversario')->middleware('route.users');
Route::get('/', [CompanyController::class, 'index'])->name('company.welcome')->middleware('route.users');
Route::get('/about', [CompanyController::class, 'about'])->name('company.about')->middleware('route.users');
Route::get('/faq', [CompanyController::class, 'faq'])->name('company.faq')->middleware('route.users');
Route::get('/policy-SAGRILAFT', [CompanyController::class, 'policy'])->name('company.policy')->middleware('route.users');
Route::get('/dollarPrices', [DollarPriceController::class, 'indexPublic'])->name('public.dollarPrices')->middleware('route.users');


//Rutas Admin
Route::domain('admin.exchangelatam.com')->middleware('auth', 'verified', 'data')->group(function () {
//Route::domain('admin.exchangelatam.test')->middleware('auth', 'verified', 'data')->group(function () {

    //Rutas Notificaciones
    Route::get('/admin/dashboard', [UserController::class, 'admin'])->name('admin.dashboard')->middleware('can:admin.dashboard');/* ok */
    Route::post('/admin/notification/read', [UserController::class, 'notificationRead'])->name('admin.notificationRead');

    //Rutas Gestión de usuarios
    Route::get('/admin/dashboard/users', [UserController::class, 'index'])->name('user.index')->middleware('can:user.index');/* ok */
    Route::get('/admin/dashboard/users/export/index', [UserController::class, 'exportIndex'])->name('user.exportIndex')->middleware('can:user.exportIndex');/*  */
    Route::get('/admin/dashboard/users/data', [UserController::class, 'usersData'])->name('admin.usersData');
    
    //Por usuario
    Route::get('/admin/dashboard/user/{user}/show', [UserController::class, 'show'])->name('admin.userShow')->middleware('can:admin.userProfile'); 
    Route::get('/admin/dashboard/user/{user}/edit', [UserController::class, 'editProfile'])->name('admin.userEdit')->middleware('can:admin.userProfile'); /* ok */
    Route::put('/admin/dashboard/user/{user}/update', [UserController::class, 'update'])->name('admin.userUpdate')->middleware('can:admin.userUpdate'); /* ok */
    Route::put('/admin/dashboard/user/{user}/verified', [VerificationController::class, 'verified'])->name('admin.userVerified');
    Route::get('/admin/dashboard/user/{id}/accounts', [UserController::class, 'showAccounts'])->name('admin.usersShowAccounts')->middleware('can:admin.admin.usersShowAccounts');/* ok */
    Route::get('/admin/dashboard/user/{id}/notices', [NoticeController::class, 'noticesUser'])->name('admin.usersNotices')->middleware('can:admin.usersNotices');/* ok */
    Route::get('/admin/dashboard/user/{id}/verification', [VerificationController::class, 'verificationUser'])->name('admin.usersVerification')->middleware('can:admin.usersVerification');/* ok */
    Route::put('/admin/dashboard/user/{user}/typeChange', [UserController::class, 'typeChange'])->name('admin.typeChange')->middleware('can:admin.typeChange');/* ok */
    Route::delete('/admin/dashboard/user/{user}/destroy', [UserController::class, 'destroy'])->name('admin.userDestroy');
    //Route::get('/admin/user/select_city', [UserController::class, 'getCity'])->name('admin.getCity');
    Route::post('/admin/dashboard/users/check/register/loggro', [UserController::class, 'checkRegister'])->name('admin.userCheckRegister');

    //Rutas notices de usuarios
    Route::post('/admin/user/{user}/notice/store', [NoticeController::class, 'store'])->name('admin.storeNotice');
    Route::delete('/admin/notice/{notice}/destroy', [NoticeController::class, 'destroy'])->name('admin.destroyNotice');

    //Rutas Gestión depósito de usuarios
    Route::get('/admin/user/{id}/deposits', [UserController::class, 'showDeposits'])->name('admin.usersShowDeposits')->middleware('can:admin.usersShowDeposits');/* ok */
    Route::delete('/admin/deposit/{deposit}/destroy', [DepositController::class, 'destroy'])->name('admin.destroyDeposit')->middleware('can:admin.destroyDeposit');/* ok */
    Route::put('/admin/deposit/{transaction}/status', [DepositController::class, 'status'])->name('admin.statusDeposit')->middleware('can:admin.statusDeposit');/* ok */

    //Rutas Gestión retiro de usuarios
    Route::get('/admin/user/{id}/withdrawals', [UserController::class, 'showWithdrawals'])->name('admin.usersShowWithdrawals')->middleware('can:admin.usersShowWithdrawals');/* ok */
    Route::post('/admin/withdrawal/store', [WithdrawalController::class, 'store'])->name('admin.storeWithdrawal')->middleware('can:admin.storeWithdrawal');/* ok */
    Route::delete('/admin/withdrawal/{withdrawal}/destroy', [WithdrawalController::class, 'destroy'])->name('admin.destroyWithdrawal')->middleware('can:admin.destroyWithdrawal');/* ok */
    Route::put('/admin/withdrawal/{withdrawal}/voucher', [WithdrawalController::class, 'voucherUp'])->name('admin.voucherUpWithdrawal')->middleware('can:admin.voucherUpWithdrawal');/* ok */
    Route::put('/admin/withdrawal/{withdrawal}/status', [WithdrawalController::class, 'status'])->name('admin.statusWithdrawal')->middleware('can:admin.statusWithdrawal');/* ok */

    //Rutas cuentas de usuario
    Route::post('/admin/account/{account}/update', [AccountController::class, 'update'])->name('admin.updateAccount');
    Route::put('/admin/account/{account}/enrolled', [AccountController::class, 'enrolled'])->name('admin.enrolledAccount');
    Route::post('/admin/account/store', [AccountController::class, 'store'])->name('admin.storeAccount');

    //Rutas vista general de depósitos
    Route::get('/admin/deposits', [DepositController::class, 'adminIndex'])->name('deposit.index')->middleware('can:deposit.index');/* ok */
    Route::get('/admin/deposits/data', [DepositController::class, 'depositsData'])->name('admin.depositsData');
    Route::get('/admin/deposits/show/{transaction}',[DepositController::class, 'showAdmin'])->name('admin.depositShow');

    //Rutas vista general de retiros
    Route::get('/admin/withdrawals', [WithdrawalController::class, 'adminIndex'])->name('withdrawal.index')->middleware('can:withdrawal.index');/* ok */
    Route::get('/admin/withdrawals/today', [WithdrawalController::class, 'indexPendientes'])->name('withdrawal.indexPendientes')->middleware('can:withdrawal.index');
    Route::get('/admin/withdrawals/voucher', [WithdrawalController::class, 'indexVoucher'])->name('withdrawal.indexVoucher')->middleware('can:withdrawal.index');
    Route::get('/admin/withdrawals/all', [WithdrawalController::class, 'indexAll'])->name('withdrawal.indexAll')->middleware('can:withdrawal.index');    
    Route::get('/admin/withdrawals/show/{transaction}',[WithdrawalController::class, 'showAdmin'])->name('admin.withdrawalShow')->middleware('can:withdrawal.index'); ;
    //Route::get('/admin/withdrawals/data', [WithdrawalController::class, 'withdrawalsData'])->name('admin.withdrawalsData');

    //Rutas gestión de roles
    Route::get('/admin/role/index', [RoleController::class, 'index'])->name('admin.roleIndex')->middleware('can:admin.roleIndex');/*  ok*/
    Route::get('/admin/role/{role}/edit', [RoleController::class, 'edit'])->name('admin.roleEdit')->middleware('can:admin.roleIndex');
    Route::get('/admin/role/create', [RoleController::class, 'create'])->name('admin.roleCreate')->middleware('can:admin.roleIndex');
    Route::post('/admin/role/store', [RoleController::class, 'store'])->name('admin.roleStore');
    Route::put('/admin/role/{role}/update', [RoleController::class, 'update'])->name('admin.roleUpdate');
    Route::delete('/admin/role/{role}/destroy', [RoleController::class, 'destroy'])->name('admin.roleDestroy');
    Route::put('/admin/user/{user}/toassing/role', [UserController::class, 'assingRole'])->name('admin.roleAssing')->middleware('can:admin.roleAssing')/* ok */;
    Route::get('/admin/change/password', [UserController::class, 'changePassword'])->name('admin.changePassword');

    //Rutas gestión permisos
    Route::get('/admin/permission/index', [PermissionController::class, 'index'])->name('admin.permissionIndex');
    Route::get('/admin.permission/create', [PermissionController::class, 'create'])->name('admin.permissionCreate');
    Route::get('/admin.permission/{permission}/edit', [PermissionController::class, 'edit'])->name('admin.permissionEdit');
    Route::post('/admin/permission/store', [PermissionController::class, 'store'])->name('admin.permissionStore');
    Route::put('/admin/permission/{permission}/update', [PermissionController::class, 'update'])->name('admin.permissionUpdate');
    Route::delete('/admin/permission/{permission}/destroy', [PermissionController::class, 'destroy'])->name('admin.permissionDestroy');

    //Rutas configuración web (Precio dollar)
    Route::get('/admin/dollarprice/index', [DollarPriceController::class, 'index'])->name('admin.dollarPriceIndex')->middleware('can:admin.dollarPriceIndex');/* ok */
    Route::get('/admin/dollarprice/{dollarPrice}/edit', [DollarPriceController::class, 'edit'])->name('admin.dollarPriceEdit')->middleware('can:admin.dollarPriceIndex');
    Route::get('/admin/dollarprice/create', [DollarPriceController::class, 'create'])->name('admin.dollarPriceCreate')->middleware('can:admin.dollarPriceIndex');
    Route::post('/admin/dollarprice/store', [DollarPriceController::class, 'store'])->name('admin.dollarPriceStore');
    Route::put('/admin/dollarprice/{dollarPrice}/update', [DollarPriceController::class, 'update'])->name('admin.dollarPriceUpdate');
    Route::delete('/admin/dollarprice/{dollarPrice}/destroy', [DollarPriceController::class, 'destroy'])->name('admin.dollarPriceDestroy');

    //Rutas configuración ofertas
    Route::get('/admin/rate/index', [RateController::class, 'index'])->name('admin.rateIndex')->middleware('can:admin.rateIndex');/*  */
    Route::post('/admin/rate/store', [RateController::class, 'store'])->name('admin.rateStore');
    Route::put('/admin/rate/{rate}/update', [RateController::class, 'update'])->name('admin.rateUpdate');
    Route::delete('/admin/rate/{rate}/destroy', [RateController::class, 'destroy'])->name('admin.rateDestroy');

    //Rutas modulo reportes
    Route::get('/admin/accounting/reports', [ReportController::class, 'index'])->name('admin.reportIndex')->middleware('can:admin.reportIndex');
    Route::get('/admin/accounting/reports/create', [ReportController::class, 'create'])->name('admin.reportCreate');
    Route::post('/admin/accounting/reports/store', [ReportController::class, 'store'])->name('admin.reportStore');
    Route::get('/admin/accounting/reports/show/{report}', [ReportController::class, 'show'])->name('admin.reportShow');
    Route::delete('/admin/accounting/reports/destroy/{report}', [ReportController::class, 'destroy'])->name('admin.reportDestroy');

    //Rutas exportacion de datos
    Route::get('/admin/accounting/reports/export/{report}', [ReportController::class, 'export'])->name('admin.reportExport');
    Route::get('/admin/users/export', [UserController::class, 'export'])->name('admin.usersExport');

    //Rutas compra de dolares
    Route::get('/admin/dollarpurchase/index', [DollarPurchaseController::class, 'index'])->name('admin.dollarPurchaseIndex')->middleware('can:admin.dollarPurchaseIndex');/* ok */
    Route::get('/admin/dollarpurchase/create', [DollarPurchaseController::class, 'create'])->name('admin.dollarPurchaseCreate');
    Route::get('/admin/dollarpurchase/edit/{dollarPurchase}', [DollarPurchaseController::class, 'edit'])->name('admin.dollarPurchaseEdit');
    Route::post('/admin/dollarpurchase/store', [DollarPurchaseController::class, 'store'])->name('admin.dollarPurchaseStore');
    Route::get('/admin/dollarpurchase/show/{dollarPurchase}', [DollarPurchaseController::class, 'show'])->name('admin.dollarPurchaseShow');
    Route::put('/admin/dollarpurchase/{dollarPurchase}/update', [DollarPurchaseController::class, 'update'])->name('admin.dollarPurchaseUpdate');
    Route::delete('/admin/dollarpurchase/{dollarPurchase}/destroy', [DollarPurchaseController::class, 'destroy'])->name('admin.dollarPurchaseDestroy');

    //Rutas de mensajería
    Route::get('/admin/messaging/index', [MessagingController::class, 'index'])->name('admin.messagingIndex')->middleware('can:admin.messagingIndex');
    Route::post('/admin/messaging/massive',[MessagingController::class, 'massive'])->name('admin.messagingMassive');

    //Ruta vista formularios ORGANIZAR
    
    Route::get('/admin/dashboard/forms/funds/{formFund}/read', [FormFundController::class, 'showAdmin'])->name('formFund.showAdmin');    
    Route::get('/admin/dashboard/forms/client/{formKnowledgeClient}/read', [FormKnowledgeClientController::class, 'showAdmin'])->name('formKnowledgeClient.showAdmin');

    //Rutas Exchange Wallet    
    Route::get('/admin/dashboard/walletexchange/{transaction}/show', [WalletExchangeController::class, 'showAdmin'])->name('admin.showWalletExchange');
    Route::put('/admin/dashboard/walletexchange/{transaction}/voucher', [WalletExchangeController::class, 'voucherUp'])->name('admin.voucherUpWalletExchange');
    Route::put('/admin/dashboard/walletexchange/{transaction}/status', [WalletExchangeController::class, 'status'])->name('admin.statusWalletExchange')->middleware('can:admin.statusWithdrawal');
    Route::delete('/admin/dashboard/walletexchange/{transaction}/destroy', [WalletExchangeController::class, 'destroy'])->name('admin.destroyWalletExchange')->middleware('can:admin.destroyWithdrawal');
    
});

//Rutas contacto
Route::middleware(['auth', 'can:panel.user', 'route.users'])->group(function () {
    Route::get('/profile/contact', [UserController::class, 'contact'])->name('users.contact');
    Route::post('profile/contact/message', [UserController::class, 'contactMessage'])->name('users.contactMessage');
});

//Rutas Users con protección para completar datos
Route::middleware(['auth', 'verified', 'can:panel.user', 'route.users', 'data'])->group(function () {
    Route::get('/dashboard/deposits', [DepositController::class, 'userIndex'])->name('users.deposits');
    Route::get('/dashboard/deposits/create', [DepositController::class, 'create'])->name('deposit.create');
    Route::get('/dashboard/deposit/{transaction}/show',[DepositController::class, 'show'])->name('deposit.show');
    Route::get('/dashboard/withdrawals', [WithdrawalController::class, 'userIndex'])->name('users.withdrawals');
    Route::get('/dashboard/withdrawal/{transaction}/show',[WithdrawalController::class, 'show'])->name('withdrawal.show');  

    Route::post('/dashboard/profile/register/account', [AccountController::class, 'storeUser'])->name('accounts.store.user');
    Route::get('/dashboard/profile/bankAccount', [AccountController::class, 'index'])->name('accounts.index.user');    
    Route::get('/dashboard/profile/register/bankAccount', [AccountController::class, 'create'])->name('accounts.create.user');

    Route::post('/dashboard/verification/upload/documents', [VerificationController::class, 'store'])->name('verification.store');

    Route::get('/dashboard/profile/change/password', [UserController::class, 'changePassword'])->name('users.changePassword');

    Route::post('/dashboard/deposit/store', [DepositController::class, 'store'])->name('deposit.store');
    Route::put('/dashboard/{transaction}/voucher', [DepositController::class, 'voucherUp'])->name('deposit.voucherUp');
    Route::post('/dashboard/{deposit}/cancel', [DepositController::class, 'cancel'])->name('deposit.cancel');

    Route::post('profile/contact/message', [UserController::class, 'contactMessage'])->name('users.contactMessage');

    //Rutas Exchange Wallets
    Route::get('/dashboard/walletexchange/index', [WalletExchangeController::class, 'userIndex'])->name('users.indexWalletExchange');
    Route::get('/dashboard/walletexchange/buybalance/create', [WalletExchangeController::class, 'createDepositWallet'])->name('users.createWalletExchangeDeposit');
    Route::post('/dashboard/walletexchange/buybalance/store', [WalletExchangeController::class, 'storeDepositWallet'])->name('users.storeWalletExchangeDeposit');     
    Route::post('/dashboard/walletexchange/sellbalance/store', [WalletExchangeController::class, 'storeWithdrawalWallet'])->name('users.storeWalletExchangeWithdrawal'); 
    Route::get('/dashboard/walletexchange/sellbalance/create', [WalletExchangeController::class, 'createWithdrawalWallet'])->name('users.createWalletExchangeWithdrawal'); 
    Route::get('/dashboard/walletexchange/{transaction}/show', [WalletExchangeController::class, 'show'])->name('users.showWalletExchange');
    Route::put('/dashboard/walletexchange/{transaction}/voucher', [WalletExchangeController::class, 'voucherUp'])->name('users.voucherUpWalletExchange');

    //Rustas Wallet Accounts
    Route::post('/dashboard/walletexchange/walletaccount/store', [WalletAccountController::class, 'store'])->name('users.storeWalletAccount');
});

//Rutas Users con acceso sin completar datos
Route::middleware(['auth', 'verified', 'can:panel.user', 'route.users'])->group(function () {
    Route::get('/dashboard', [TransactionController::class, 'dashboard'])->name('dashboard');
    Route::get('/dashboard/profile', [UserController::class, 'edit'])->name('user.edit');
    Route::put('/dashboard/profile/update', [UserController::class, 'updateProfile'])->name('user.update');
    Route::put('/dashboard/profile/picture', [UserController::class, 'picture'])->name('users.picture');
    Route::get('/dashboard/verification',[VerificationController::class, 'create'])->name('verification.create');
    Route::get('/dashboard/forms/funds', [FormFundController::class, 'create'])->name('formFund.create');
    Route::post('/dashboard/forms/funds/store', [FormFundController::class, 'store'])->name('formFund.store');    
    Route::get('/dashboard/forms/funds/{formFund}/read', [FormFundController::class, 'show'])->name('formFund.show');
    Route::get('/dashboard/forms/client', [FormKnowledgeClientController::class, 'create'])->name('formKnowledgeClient.create');
    Route::post('/dashboard/forms/client/store', [FormKnowledgeClientController::class, 'store'])->name('formKnowledgeClient.store'); 
    Route::get('/dashboard/forms/client/{formKnowledgeClient}/read', [FormKnowledgeClientController::class, 'show'])->name('formKnowledgeClient.show');
    /* Route::get('/profile/select_city', [UserController::class, 'getCity'])->name('users.getCity'); */
    /* Route::put('/profile/picture/delete', [UserController::class, 'pictureDelete'])->name('users.pictureDelete'); */
});
