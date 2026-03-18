<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Traits\ResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class UserController extends Controller
{
    use ResponseTrait;

    public function index()
    {
        return Inertia::render('UsersAdmin/index');
    }

    public function get_users(Request $request)
    {
        try {
            $users = User::query();

            return $this->success('Usuario se han obtenido', $users);
        } catch (\Exception $e) {
            return $this->error('Error al obtener los usuarios el usuario', 500);
        }
    }

    public function ce_user(Request $request)
    {
        $id = $request->input('id');

        $rules = [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'password' => $id == 0 ? 'required|min:6' : 'nullable|min:6',
            'cellphone' => 'required'
        ];

        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return $this->error($validator->errors()->first(), 422);
        }

        try {
            if ($id == 0) {
                $user = new User([
                    'name' => $request->name,
                    'email' => $request->email,
                    'cellphone' => $request->cellphone,
                    'password' => bcrypt($request->password),
                ]);
                $user->save();

                return $this->success('Usuario creado correctamente', $user);
            } else {
                $user = User::find($id);
                if (!$user) {
                    return $this->error('Usuario no encontrado', 404);
                }

                $user->name = $request->name;
                $user->email = $request->email;
                if ($request->filled('password')) {
                    $user->password = bcrypt($request->password);
                }
                $user->cellphone = $request->cellphone;
                $user->save();

                return $this->success('Usuario actualizado correctamente', $user);
            }

        } catch (\Exception $e) {
            return $this->error('Error al procesar el usuario', 500);
        }
    }

    public function delete_user(Request $request)
    {
        $user = User::find($request->id);

        if (!$user) {
            return $this->error('Usuario no encontrado', 404);
        }

        try {
            $user->delete();
            return $this->success('Usuario eliminado correctamente');
        } catch (\Exception $e) {
            return $this->error('Error al eliminar el usuario', 500);
        }
    }
}
