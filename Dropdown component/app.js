let items = {
    root: {
        label: 'PROFILE',
        icon: 'fa-solid fa-user-large'
    },

    children: [
        {
         label: 'MY LIST',
         icon: 'fa-solid fa-bars'
        },
        {
         label: 'STATISTICS',
         icon: 'fa-solid fa-chart-simple'
        },
        // ...
    ]
}

let drop = new DropDown(items, "profile-menu-root")
drop.render()