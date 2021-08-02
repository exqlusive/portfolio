<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WorkExperienceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('work_experiences')->insert([
            [
                'start_end' => '2020 - 2021',
                'function' => 'Project Manager & Jr Software Developer',
                'location' => 'Lanthopus BV, Veghel',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'start_end' => '2020 - 2020',
                'function' => 'Software developer – Stage',
                'location' => 'Quadira, Veghel',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'start_end' => '2019 - 2020',
                'function' => 'Software Developer',
                'location' => 'DreamHack AB, Zweden',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'start_end' => '2019 - 2019',
                'function' => 'Jr Software Developer',
                'location' => 'Quadira, Veghel',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'start_end' => '2018 - 2018',
                'function' => 'Project Manager',
                'location' => 'Lanthopus BV, Veghel',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'start_end' => '2018 - 2018',
                'function' => 'Software Developer - Stage',
                'location' => 'Lanthopus BV, Veghel',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'start_end' => '2017 - heden',
                'function' => 'Twitch Partner / Streaming',
                'location' => 'Uden',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'start_end' => '2015 - 2016',
                'function' => 'Eerste mederwerker',
                'location' => 'De Eetkaamer, Uden',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'start_end' => '2014 - 2015',
                'function' => 'Eerste mederwerker',
                'location' => 'Eetkafee de Buren, Uden',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'start_end' => '2012 - 2014',
                'function' => 'Medewerker evenementen',
                'location' => 'De Koppelen Catering, Beek en Donk',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'start_end' => '2010 - 2011',
                'function' => 'Medewerker ICT - Stage',
                'location' => 'Udenscollege, Uden',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'start_end' => '2009 - 2014',
                'function' => 'Baan- en Horecamedewerker (Eindverantwoordelijke)',
                'location' => 'Traxx, Uden',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'start_end' => '2007 - 2009',
                'function' => 'Kok, Chinees afhaalrestaurant',
                'location' => 'Finefood, Uden',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'start_end' => '2008 - 2008',
                'function' => 'Medewerker Elektrotechniek – Stage',
                'location' => 'Paalman BV, Uden',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ]
        ]);
    }
}
