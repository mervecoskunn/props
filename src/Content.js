
function Content(props) {
  // console.log(props.products)
  // console.log(props.products[1])
  return (
      <div>Content
          <p>
              <strong>Name : </strong>{props.user.name}
          </p>
          <p>
              <strong>Surname : </strong>{props.user.surname}
          </p>
          <p>
              <strong>Age: : </strong>{props.user.age}
          </p>

          <div>
              <h2>Urunler : {props.products.length}</h2>

              {
                  props.products.map(product => {
                      
                      product.name;
                  })

              }


              {/* <p>
                  {props.products[0].name} -
                  {props.products[0].price} -
                  {props.products[0].stock}
              </p>
              <p>
                  {props.products[1].name} -
                  {props.products[1].price} -
                  {props.products[1].stock}
              </p> */}
          </div>
      </div>
  )
}
export default Content;