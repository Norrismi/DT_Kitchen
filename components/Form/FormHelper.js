const content = {
    inputs: [
        {

            name: 'Name',
            type: 'text',
            registerName: 'name',
            placeholder: 'Order Name',
            ariaLabel: 'Order Name',
            error: 'error.name',
            errorMessage: 'Order name is required',


        },
        {
            name: 'Email',
            type: 'text',
            registerName: 'email',
            placeholder: 'Email@provider.com',
            ariaLabel: 'Email'

        },
        {
            name: 'Number',
            type: 'text',
            registerName: 'phone',
            placeholder: '111-111-1111',
            ariaLabel: 'Phone Number',
            error: 'error.name',
            errorMessage: 'Phone number is required'

        },
    ],


    selects: [
        {
            label: 'Protein',
            registerName: 'food__protein',
            placeholder: 'Choose...'

        },
        {
            label: 'Greens',
            registerName: 'food__green',
            placeholder: 'Choose...'

        },
        {
            label: 'Starch',
            registerName: 'food__starch',
            placeholder: 'Choose...'

        },
        {
            label: 'Side',
            registerName: 'food__side',
            placeholder: 'Choose...'

        },
        {
            label: 'Drink',
            registerName: 'food__drink',
            placeholder: 'Choose...'

        },
        {
            label: 'Dessert',
            registerName: 'food__dessert',
            placeholder: 'Choose...'

        },
  
    ]
}

export default content