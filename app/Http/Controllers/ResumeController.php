<?php

namespace App\Http\Controllers;

use App\Models\Education;
use App\Models\Language;
use App\Models\Other;
use App\Models\Skills;
use App\Models\WorkExperience;

class ResumeController extends Controller
{
    /**
     * @return array
     */
    public function index(): array
    {
        $educations = Education::orderBy('start_end', 'desc')->get();
        $workExperiences = WorkExperience::orderBy('start_end', 'desc')->get();
        $languages = Language::orderBy('percentage', 'desc')->get();
        $others = Other::all();
        $skills = Skills::all();

        return [
            'educations' => $educations,
            'workExperiences' => $workExperiences,
            'languages' => $languages,
            'others' => $others,
            'skills' => $skills
        ];
    }
}
