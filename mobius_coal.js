ServerEvents.recipes(event => {
    event.remove({ output:'projecte:mobius_fuel' })
    event.shapeless(
        'projecte:mobius_fuel',
        [
            'projecte:philosophers_stone',
            '8x projecte:alchemical_coal_block'
        ]
    )
})