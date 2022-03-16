import { useParams } from "react-router-dom";
import "./shopProduct.css";
import { useSelector } from "react-redux";
import { Col, Row, Container } from "react-bootstrap";
import { AiFillStar } from 'react-icons/ai';
import { selectShopProductById } from "../../common/slices/shopProductSlice";
import { CompetingSellers } from "../competing-sellers/CompetingSellers";

//imgs
import cartoonBat from "../../imgs/cartoon-baseball-bat.png";
import cartoonComputer from "../../imgs/cartoon-computer.png";
import cartoonSteak from "../../imgs/cartoon-steak.png";
import cartoonClothing from "../../imgs/Clothing-baby-clothes.png";
import cartoonDiamond from "../../imgs/diamond-ring.png";
import cartoonMeds from "../../imgs/Free-medica.png";
import cartoonShoes from "../../imgs/Sneaker-tennis-shoes.png";
import { useEffect } from "react";
import ProductReviewDetail from "./ProductReviewDetail";
import ProductReviewCard from "./product-review-card/ProductReviewCard"
const ShopProductDisplay = () => {
  const { shop_product_id } = useParams();

  const id: number = parseInt(shop_product_id!);

  const ReduxShopProducts = useSelector((state) =>
    selectShopProductById(state, id)
  );

  useEffect((): void => {
    console.log(ReduxShopProducts);
  }, [ReduxShopProducts]);

  const ImgStyleBase = {
    backgroundImage: "",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "40%",
  };

  function ImgSplice(catagories: String[]) {
    let newImg = Object.assign({}, ImgStyleBase);
    catagories.forEach((catagory) => {
      switch (catagory) {
        case "perishable":
          newImg.backgroundImage = `url('${cartoonSteak}')`;
          break;
        case "furniture":
          newImg.backgroundImage = `url('${cartoonComputer}')`;
          break;
        case "entertainment":
          newImg.backgroundImage = `url('${cartoonComputer}')`;
          break;
        case "clothing":
          newImg.backgroundImage = `url('${cartoonClothing}')`;
          break;
        case "toys":
          newImg.backgroundImage = `url('${cartoonDiamond}')`;
          break;
        case "homegoods":
          newImg.backgroundImage = `url('${cartoonBat}')`;
          break;
        case "automotive":
          newImg.backgroundImage = `url('${cartoonBat}')`;
          break;
        case "personal-care":
          newImg.backgroundImage = `url('${cartoonMeds}')`;
          break;
        case "school&office":
          newImg.backgroundImage = `url('${cartoonShoes}')`;
          break;
      }
    });
    return newImg;
  }

  return (
    <Container fluid>
      <Row>
        <Col lg={8}>
          <Container fluid className="" >
            <Row className="" >
              <Col lg={4} className="" >
                {ReduxShopProducts && <div style={ImgStyleBase}></div>}
                {/* <div className="" > */}
                <h2>{ReduxShopProducts?.name?.toUpperCase()}</h2>
                <br />
                <table style={{width:'100%'}} >
                  <thead>
                    <tr>
                      {['id', 'title', 'comment'].map(c => {
                        return (
                          <th>{c}</th>
                        )
                      })}

                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4, 5, 6].map(e => {
                      return (
                        <tr>
                          {['id', 'title', 'comment'].map(c => {
                            return (
                              <td>{e}{c}</td>
                            )
                          })}
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
                {/* </div> */}
              </Col>
              <Col lg={8} className="">
                {ReduxShopProducts && <div style={ImgStyleBase}></div>}
                <div className="ProductInfoPocket">
                  <h2>{ReduxShopProducts?.name?.toUpperCase()} Reviews:</h2>
                  <br />
                  <table >
                    <thead>
                      <tr>
                        {['id', 'title', 'comment'].map(c => {
                          return (
                            <th>{c}</th>
                          )
                        })}

                      </tr>
                    </thead>
                    <tbody>
                      {[1, 2,].map(e => {
                        return (
                          <tr>
                            {['id', 'title', 'comment'].map(c => {
                              return (
                                <td>{e}{c}</td>
                              )
                            })}
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="">
                <p>{ReduxShopProducts?.description}</p>
                <Container>
                  <Row>
                    <Col lg={4}>
                      <table >
                        <thead>
                          <tr>
                            {['1', '2', '3'].map(c => {
                              return (
                                <th>{c}</th>
                              )
                            })}

                          </tr>
                        </thead>
                        <tbody>
                          {[1, 2, 3, 4, 5].map(e => {
                            return (
                              <tr>
                                {['1', '2', '3'].map(c => {
                                  return (
                                    <td>{['1', '2', '3'].map(c => {
                                      return (
                                        <AiFillStar style={{ color: 'orange' }} />
                                      )
                                    })}</td>
                                  )
                                })}
                              </tr>
                            )
                          })}
                        </tbody>
                      </table>
                    </Col>
                    <Col lg={8}>
                      <ProductReviewDetail />
                      <br />
                      {[1, 2, 3].map(e => {
                        return (<>
                          <ProductReviewCard />
                          <br />
                        </>
                        )
                      })}
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
            <CompetingSellers Seller={ReduxShopProducts?.id!}></CompetingSellers>
          </Container>
        </Col>
        <Col lg={4}>
          <Container fluid className="" style={{  height: '100%' }}>
            <Row className="" style={{  height: '100%' }}>
              <Col lg={12} className="" style={{  height: '100%' }}>
              {[1, 2, 3].map(e => {
                        return (<>
                          <ProductReviewCard />
                          <br />
                        </>
                        )
                      })}
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default ShopProductDisplay;
