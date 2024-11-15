export function getImageUrl(person:any, size:string = 's') {
    //props可以对属性进行默认赋值，方法是在后面使用“=”来进行默认的赋值
    return (
        'https://i.imgur.com/' +
        person.imageId +
        size +
        '.jpg'
    );
}