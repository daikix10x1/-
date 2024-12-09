ServerEvents.recipes(event => {
    event.remove({ output: 'projecte:klein_star_ein' })
    event.shaped(
        'projecte:klein_star_ein',
        [   
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'projecte:aeternalis_fuel_block',
            B: 'minecraft:diamond_block'
        }
    )
    
})