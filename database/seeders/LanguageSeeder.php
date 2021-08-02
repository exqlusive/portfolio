<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LanguageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('languages')->insert([
            [
                'language' => 'Nederlands',
                'bg_color' => 'bg-blue-200',
                'fg_color' => 'bg-blue-500',
                'percentage' => '100',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'language' => 'Engels',
                'bg_color' => 'bg-red-200',
                'fg_color' => 'bg-red-500',
                'percentage' => '100',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'language' => 'Zweeds',
                'bg_color' => 'bg-yellow-200',
                'fg_color' => 'bg-yellow-500',
                'percentage' => '50',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'language' => 'Duits',
                'bg_color' => 'bg-pink-200',
                'fg_color' => 'bg-pink-500',
                'percentage' => '25',
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ]
        ]);
    }
}
