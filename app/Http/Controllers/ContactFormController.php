<?php

namespace App\Http\Controllers;

use App\Models\ContactForm;
use Illuminate\Http\Request;

class ContactFormController extends Controller
{
    public function create(Request $request)
    {
        $contactForm = new ContactForm;

        $contactForm->first_name = $request->input('first-name');
        $contactForm->company = $request->input('company');
        $contactForm->email = $request->input('email');
        $contactForm->phone_number = $request->input('phone-number');
        $contactForm->message = $request->input('message');

        $contactForm->save();

        return redirect()->back()->with(['success']);
    }
}
