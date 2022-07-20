let items = {
    root: {
        label: 'Profile',
        icon: '1'
    },

    children: [
        {
         label: 'MY LIST',
         icon: '2'
        },
        {
         label: 'STATISTICS',
         icon: '3'
        },
        // ...
    ]
}

let drop = new DropDown(items, "profile-menu-root")
drop.render()