ServerEvents.recipes(event => {
    event.remove({ output: 'projecte:alchemical_coal' })
    event.shapeless(
        'projecte:alchemical_coal',
        [
            'projecte:philosophers_stone',
            '8x minecraft:coal_block'
        ]
    )
})