ServerEvents.recipes(event => {
    event.remove({ output: 'projectexpansion:final_star_shard' })
    event.shaped(
        'projectexpansion:final_star_shard',
        [   
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'projectexpansion:gargantuan_star_omega',
            B: 'minecraft:nether_star'
        }
    )
    
})