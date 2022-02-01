<?php

use GuzzleHttp\Middleware;
use Illuminate\Routing\RouteGroup;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RateController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\NoticeController;
use App\Http\Controllers\AccountController;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\DepositController;
use App\Http\Controllers\CampaignController;
use App\Http\Controllers\PermissionController;
use App\Http\Controllers\WithdrawalController;
use App\Http\Controllers\DollarPriceController;
use App\Http\Controllers\DollarPurchaseController;
use App\Http\Controllers\MessagingController;
use App\Http\Controllers\ReportController;
use App\Http\Controllers\VerificationController;


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

//Rutas publicas

Route::get('/campaigns/vip', [CampaignController::class, 'pautaVip'])->name('campaign.pautaVip')->middleware('route.users');
Route::get('/campaigns/sorteoAniversario', [CampaignController::class, 'sorteoAniversario'])->name('campaign.sorteoAniversario')->middleware('route.users');
Route::get('/', [CompanyController::class, 'index'])->name('company.index')->middleware('route.users');
Route::get('/about', [CompanyController::class, 'about'])->name('company.about')->middleware('route.users');
Route::get('/faq', [CompanyController::class, 'faq'])->name('company.faq')->middleware('route.users');
Route::get('/policy', [CompanyController::class, 'policy'])->name('company.policy')->middleware('route.users');
Route::get('/dollarPrices', [DollarPriceController::class, 'indexPublic'])->name('public.dollarPrices')->middleware('route.users');


//Rutas Admin
Route::domain('admin.tradingautomaticofx.com')->middleware('auth', 'verified', 'data')->group(function () {
//Route::domain('admin.exchangelatam.test')->middleware('auth', 'verified', 'data')->group(function () {

    //Rutas Notificaciones 
    Route::get('/admin/dashboard', [UserController::class, 'admin'])->name('admin.dashboard')->middleware('can:admin.dashboard');/* ok */
    Route::post('/admin/notification/read', [UserController::class, 'notificationRead'])->name('admin.notificationRead');

    //Rutas Gestión de usuarios
    Route::get('/admin/users', [UserController::class, 'index'])->name('user.index')->middleware('can:user.index');/* ok */
    Route::get('/admin/users/export/index', [UserController::class, 'exportIndex'])->name('user.exportIndex')->middleware('can:user.exportIndex');/*  */
    Route::get('/admin/users/data', [UserController::class, 'usersData'])->name('admin.usersData');
    //Por usuario
    Route::get('/admin/user/{id}/edit', [UserController::class, 'editData'])->name('admin.usersEditData')->middleware('can:admin.usersEditData'); /* ok */
    Route::put('/admin/user/{user}/update', [UserController::class, 'update'])->name('admin.userUpdate')->middleware('can:admin.userUpdate'); /* ok */
    Route::put('/admin/user/{user}/verified', [UserController::class, 'verified'])->name('admin.userVerified');   
    Route::get('/admin/user/{id}/accounts', [UserController::class, 'showAccounts'])->name('admin.usersShowAccounts')->middleware('can:admin.admin.usersShowAccounts');/* ok */
    Route::get('/admin/user/{id}/notices', [NoticeController::class, 'noticesUser'])->name('admin.usersNotices')->middleware('can:admin.usersNotices');/* ok */
    Route::get('/admin/user/{id}/verification', [VerificationController::class, 'verificationUser'])->name('admin.usersVerification')->middleware('can:admin.usersVerification');/* ok */
    Route::put('/admin/user/{user}/typeChange', [UserController::class, 'typeChange'])->name('admin.typeChange')->middleware('can:admin.typeChange');/* ok */
    Route::delete('/admin/user/{user}/destroy', [UserController::class, 'destroy'])->name('admin.userDestroy');
    Route::get('/admin/user/select_city', [UserController::class, 'getCity'])->name('admin.getCity');
    Route::post('/admin/users/check/register/loggro', [UserController::class, 'checkRegister'])->name('admin.userCheckRegister');

    //Rutas notices de usuarios
    Route::post('/admin/user/{user}/notice/store', [NoticeController::class, 'store'])->name('admin.storeNotice');
    Route::delete('/admin/notice/{notice}/destroy', [NoticeController::class, 'destroy'])->name('admin.destroyNotice');

    //Rutas Gestión depósito de usuarios
    Route::get('/admin/user/{id}/deposits', [UserController::class, 'showDeposits'])->name('admin.usersShowDeposits')->middleware('can:admin.usersShowDeposits');/* ok */
    Route::delete('/admin/deposit/{deposit}/destroy', [DepositController::class, 'destroy'])->name('admin.destroyDeposit')->middleware('can:admin.destroyDeposit');/* ok */
    Route::post('/admin/deposit/{deposit}/status', [DepositController::class, 'status'])->name('admin.statusDeposit')->middleware('can:admin.statusDeposit');/* ok */

    //Rutas Gestión retiro de usuarios
    Route::get('/admin/user/{id}/withdrawals', [UserController::class, 'showWithdrawals'])->name('admin.usersShowWithdrawals')->middleware('can:admin.usersShowWithdrawals');/* ok */
    Route::post('/admin/withdrawal/store', [WithdrawalController::class, 'store'])->name('admin.storeWithdrawal')->middleware('can:admin.storeWithdrawal');/* ok */
    Route::delete('/admin/withdrawal/{withdrawal}/destroy', [WithdrawalController::class, 'destroy'])->name('admin.destroyWithdrawal')->middleware('can:admin.destroyWithdrawal');/* ok */
    Route::post('/admin/withdrawal/{withdrawal}/voucher', [WithdrawalController::class, 'voucherUp'])->name('admin.voucherUpWithdrawal')->middleware('can:admin.voucherUpWithdrawal');/* ok */
    Route::post('/admin/withdrawal/{withdrawal}/status', [WithdrawalController::class, 'status'])->name('admin.statusWithdrawal')->middleware('can:admin.statusWithdrawal');/* ok */
    
    //Rutas cuentas de usuario
    Route::post('/admin/account/{account}/update', [AccountController::class, 'update'])->name('admin.updateAccount');
    Route::put('/admin/account/{account}/enrolled', [AccountController::class, 'enrolled'])->name('admin.enrolledAccount');
    Route::post('/admin/account/store', [AccountController::class, 'store'])->name('admin.storeAccount');

    //Rutas vista general de depósitos
    Route::get('/admin/deposits', [DepositController::class, 'index'])->name('deposit.index')->middleware('can:deposit.index');/* ok */
    Route::get('/admin/deposits/data', [DepositController::class, 'depositsData'])->name('admin.depositsData');

    //Rutas vista general de retiros
    Route::get('/admin/withdrawals', [WithdrawalController::class, 'index'])->name('withdrawal.index')->middleware('can:withdrawal.index');/* ok */
    Route::get('/admin/withdrawals/today', [WithdrawalController::class, 'indexPendientes'])->name('withdrawal.indexPendientes')->middleware('can:withdrawal.index');
    Route::get('/admin/withdrawals/voucher', [WithdrawalController::class, 'indexVoucher'])->name('withdrawal.indexVoucher')->middleware('can:withdrawal.index');
    Route::get('/admin/withdrawals/all', [WithdrawalController::class, 'indexAll'])->name('withdrawal.indexAll')->middleware('can:withdrawal.index');
    Route::get('/admin/withdrawals/data', [WithdrawalController::class, 'withdrawalsData'])->name('admin.withdrawalsData');

    //Rutas gestión de roles
    Route::get('/admin/role/index', [RoleController::class, 'index'])->name('admin.roleIndex')->middleware('can:admin.roleIndex');/*  ok*/
    Route::post('/admin/role/store', [RoleController::class, 'store'])->name('admin.roleStore');
    Route::put('/admin/role/{role}/update', [RoleController::class, 'update'])->name('admin.roleUpdate');    
    Route::delete('/admin/role/{role}/destroy', [RoleController::class, 'destroy'])->name('admin.roleDestroy');
    Route::put('/admin/user/{user}/toassing/role', [UserController::class, 'assingRole'])->name('admin.roleAssing')->middleware('can:admin.roleAssing')/* ok */;
    Route::get('/admin/change/password', [UserController::class, 'changePassword'])->name('admin.changePassword');

    //Rutas gestión permisos
    Route::get('/admin/permission/index', [PermissionController::class, 'index'])->name('admin.permissionIndex');
    Route::post('/admin/permission/store', [PermissionController::class, 'store'])->name('admin.permissionStore');
    Route::put('/admin/permission/{permission}/update', [PermissionController::class, 'update'])->name('admin.permissionUpdate');    
    Route::delete('/admin/permission/{permission}/destroy', [PermissionController::class, 'destroy'])->name('admin.permissionDestroy');

    //Rutas configuración web (Precio dollar)
    Route::get('/admin/dollarprice/index', [DollarPriceController::class, 'index'])->name('admin.dollarPriceIndex')->middleware('can:admin.dollarPriceIndex');/* ok */
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
});

//Rutas contacto
Route::middleware(['auth', 'can:panel.user', 'route.users'])->group(function () {
    Route::get('/profile/contact', [UserController::class, 'contact'])->name('users.contact');
    Route::post('profile/contact/message', [UserController::class, 'contactMessage'])->name('users.contactMessage');    
});

//Rutas Users protección para completar datos
Route::middleware(['auth', 'verified', 'can:panel.user', 'route.users', 'data'])->group(function () {
    Route::get('/profile/deposits', [UserController::class, 'deposits'])->name('users.deposits');
    Route::get('/profile/withdrawals', [UserController::class, 'withdrawals'])->name('users.withdrawals');
    Route::get('/profile/accounts', [UserController::class, 'accounts'])->name('users.accounts');
    Route::post('/profile/verification', [UserController::class, 'verification'])->name('users.verification');
    Route::post('/profile/register/account', [UserController::class, 'registerAccount'])->name('users.registerAccount');
    Route::get('/profile/change/password', [UserController::class, 'changePassword'])->name('users.changePassword');

    Route::post('/deposit/store', [DepositController::class, 'store'])->name('deposit.store');
    Route::post('/deposit/{deposit}/voucher', [DepositController::class, 'voucherUp'])->name('deposit.voucherUp');
    Route::post('/deposit/{deposit}/cancel', [DepositController::class, 'cancel'])->name('deposit.cancel');

});
//Rutas Users con acceso sin completar datos
Route::middleware(['auth', 'verified', 'can:panel.user', 'route.users'])->group(function () {
    Route::get('/profile/edit', [UserController::class, 'edit'])->name('users.edit');
    Route::post('/profile/update', [UserController::class, 'updateProfile'])->name('users.updateProfile');
    Route::get('/profile/select_city', [UserController::class, 'getCity'])->name('users.getCity');
    Route::post('/profile/picture', [UserController::class, 'picture'])->name('users.picture');
});

/* Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [UserController::class, 'dashboard'])->name('user.dashboard');
    Route::get('/dashboard/user/edit', [UserController::class, 'edit'])->name('user.edit');
    Route::get('/dashboard/deposits', [DepositController::class, 'index'])->name('deposits.index');
    Route::get('/dashboard/withdrawals', [WithdrawalController::class, 'index'])->name('withdrawals.index');
    Route::get('/dashboard/accounts',[AccountController::class, 'index'])->name('accounts.index');
    Route::get('/dashboard/verifion',[VerificationController::class, 'create'])->name('verification.create');
}); */









/* Route::prefix('user')->group(function () {
    
});*/
/* Route::group(['middleware' => 'auth', 'verified'], function () {
    Route::get('/dashboard', [UserController::class, 'dashboard'])->name('user.dashboard');
}); */