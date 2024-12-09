ServerEvents.recipes(event => {
    event.remove({ output:'projecte:aeternalis_fuel' })
    event.shapeless(
        'projecte:aeternalis_fuel',
        [
            'projecte:philosophers_stone',
            '8x projecte:mobius_fuel_block'
        ]
    )
})