export default (element : any, array : any, property?: "" ) => {
  array.map((item: any) => property? item.id : item).includes(property)
}

