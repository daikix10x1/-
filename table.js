ServerEvents.recipes(event => {
    event.remove({ output: 'projecte:transmutation_table' })
    event.shaped(
        'projecte:transmutation_table',
        [   
            'CDC',
            'BAB',
            'CBC'
        ],
        {
            A: 'projecte:philosophers_stone',
            B: '64x mekanism:pellet_antimatter',
            C: 'projecte:red_matter_block',
            D: 'projectexpansion:final_star_shard'
        }
    )
    
})
ServerEvents.recipes(event => {
    event.remove({ output: 'projecte:transmutation_tablet' })
    event.shaped(
        'projecte:transmutation_tablet',
        [   
            'BCB',
            'BAB',
            'BBB'
        ],
        {
            A: 'projecte:transmutation_table',
            B: 'projectexpansion:gargantuan_star_omega',
            C: 'projectexpansion:final_star'
        }
    )
    
})