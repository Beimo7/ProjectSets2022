import Mock from 'mockjs'

// let id = Mock.mock('@id')
// console.log({id})

// let obj = Mock.mock({
//     id: '@id()',
//     name: '@cname()',
//     date: '@date()',
//     avatar: "@image('200x200','red', '#fff', 'avatar')",
//     description: '@paragraph()',
//     ip: '@ip()',
//     email: '@email()'
// })

// console.log({obj})

Mock.mock('/api/setData', 'get', () => {
    let data = []
    for(let i = 0; i < 100; i++) {
        let item = Mock.mock({
            id: '@id()',
            name: '@cname()',
            date: '@date()',
            email: '@email()'
        })
        data.push(item);
    }
    // console.log('first',{data})
    // data.forEach((item, index) => {
    //     console.log(index, item)
    // })
    return data
})