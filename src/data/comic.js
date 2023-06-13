import {faker} from '@faker-js/faker';


/**
 * Vamos a ver el uso de faker para poder crear post automaticamente
 * faker es una libreria para crear datos falsos y se usa para rellenar bbdd
 * hacer test de estres al sistema,crear conjuntos de datos para pruebas
 */

let comics = [1,2,3,4,5,6,7,8,9,10]

comics = comics.map(post=>{
    return {
        id:post,
        title:faker.lorem.sentence(),
        image:faker.image.url(),
        content:faker.lorem.sentences(100),
        author:faker.person.firstName() + " " + faker.person.middleName()
    }
})

export default comics