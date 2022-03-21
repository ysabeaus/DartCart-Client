import { Alert, Modal, Button } from "react-bootstrap";
import { saveProduct } from "../../common/slices/productRegisterSlice";
import { Product } from "../../common/types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../common/hooks";

export function ProductRegister() {
  const currentDate = Date.now();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const dispatch = useAppDispatch();
  const nav = useNavigate();

  const product: Product = {
    id: 0,
    name: "",
    description: "",
  };

  // BASIC input validation: no empty fields, passwords must match, formatting requirements
  // Possible TODO: Password complexity requirements
  // Possible TODO: Enforcing username requirements, address formatting
  const validateInput = () => {
    if (name === "") {
      setError("Please enter a name.");
    } else if (description === "") {
      setError("Please enter a description.");
    } else {
      return true;
    }
  };

  const createProduct = async () => {
    product.name = name;
    product.description = description;

    if (!validateInput()) {
      return;
    }

    await dispatch(saveProduct(product))
      .unwrap()
      .then((originalPromiseResult) => {
        setShowModal(true); //need to make sure this says product created, not user registered
      })
      .catch((rejectedValueOrSerializedError) => {
        setError("That product name is unavailable.");
        clearInputs();
      });
  };

  function clearInputs() {
    setName("");
  }

  // Redirect upon modal close
  function handleClose() {
    setShowModal(false);
  }

  return (
    <>
      <section className="vh-200">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-10 col-sm-12">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-header card text-center bg-success text-white">
                  <h3 className="mb-0">Add Inventory</h3>
                </div>
                <div
                  className="card-body p-5 text-center"
                >
                  {error ? <Alert variant="danger">{error}</Alert> : null}

                  <div className="row">
                  <div className="form-outline mb-4">
                      <select className="form-control form-control-lg">

                      </select>
                      </div>
                  </div>

                  <div className="row">
                  <div className="form-outline mb-4">
                      <select className="form-control form-control-lg">

                      </select>
                      </div>
                  </div>

                  <div className="row">
                    <div className="form-outline mb-4">
                      <input
                        type="number"
                        placeholder="Quantity"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                </div>
                <div className="row">
                <div className="form-outline mb-4">
                      <input
                        type="number"
                        placeholder="Price"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="row">
                <div className="form-outline mb-4">
                      <input
                        type="number"
                        placeholder="Discount"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  </div>

                  <button
                    className="btn btn-success btn-lg btn-block"
                    onClick={createProduct}
                  >
                    Add
                  </button>

                  <Modal show={showModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Add Inventory</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Inventory created. Congratulations!
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
}

export default ProductRegister;
