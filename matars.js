ServerEvents.recipes(event => {
    event.remove({ output: 'projecte:dark_matter' })
    event.shaped(
        'projecte:dark_matter',
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
ServerEvents.recipes(event => {
    event.remove({ output: 'projecte:red_matter' })
    event.shaped(
        'projecte:red_matter',
        [   
            'AAA',
            'BBB',
            'AAA'
        ],
        {
            A: 'projecte:aeternalis_fuel_block',
            B: 'projecte:dark_matter_block'
        }
    )
    
})
ServerEvents.recipes(event => {
    event.remove({ output: 'projecte:red_matter_block' })
    event.shaped(
        'projecte:red_matter_block',
        [   
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'projecte:red_matter'
        }
    )
    
})
ServerEvents.recipes(event => {
    event.remove({ output: 'projecte:dark_matter_block' })
    event.shaped(
        'projecte:dark_matter_block',
        [   
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'projecte:dark_matter'
        }
    )
    
})