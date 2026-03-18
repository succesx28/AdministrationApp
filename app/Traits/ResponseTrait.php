<?php

namespace App\Traits;

trait ResponseTrait
{
    public function success($message, $data = null, $code = 200)
    {
        if (request()->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => $message,
                'data' => $data
            ], $code);
        }

        return redirect()->back()->with('success', $message);
    }

    public function error($message, $code = 500)
    {
        if (request()->expectsJson()) {
            return response()->json([
                'success' => false,
                'message' => $message
            ], $code);
        }

        return redirect()->back()->with('error', $message);
    }
}
