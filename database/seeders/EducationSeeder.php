<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EducationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('educations')->insert([
            [
                'start_end' => '2017 - 2020',
                'subject' => 'Applicatie en Media- ontwikkeling MBO4',
                'description' => 'Kerntaken:
                    <ul>
                        <li>- Levert een bijdrage aan het ontwikkeltraject</li>
                        <li>- Realiseert en test een product</li>
                        <li>- Opleveren van een product</li>
                        <li>- Onderhoudt en beheert de applicatie</li>
                    </ul>',
                'location' => 'ROC de Leijgraaf, Oss',
                'has_diploma' => 1,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'start_end' => '2009 - 2012',
                'subject' => 'ICT – Applicatieontwikkeling MBO4',
                'description' => null,
                'location' => 'ROC de Leijgraaf, Oss',
                'has_diploma' => 0,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ],
            [
                'start_end' => '2005 - 2009',
                'subject' => 'VMBO – Kadergericht',
                'description' => null,
                'location' => 'Udenscollege, Uden',
                'has_diploma' => 1,
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
                'updated_at' => Carbon::now()->format('Y-m-d H:i:s')
            ]
        ]);
    }
}
