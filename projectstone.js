ServerEvents.recipes(event => {
    event.remove({ output: 'projecte:philosophers_stone' })
    event.shaped(
        'projecte:philosophers_stone',
        [   
            'CAD',
            'ABA',
            'EAF'
        ],
        {
            A: 'mekanism:pellet_antimatter',
            B: 'mekanism:qio_drive_supermassive',  //arg 3: the mapping object
            C: 'mekanism:mekasuit_helmet',
            D: 'mekanism:mekasuit_bodyarmor',
            E: 'mekanism:mekasuit_pants',
            F: 'mekanism:mekasuit_boots',
        }
    )
    
})

        
 