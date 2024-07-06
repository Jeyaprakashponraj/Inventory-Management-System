const user = require('../Models/userModel');
const productModel = require('../Models/productModel');

exports.adduserCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    console.log(userId);

    if (!userId || !itemId) {
      return res.status(400).json({ success: false, message: "userId and itemId are required" });
    }

    let userData = await user.findById(userId);
    console.log(userData);
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    let productData = await productModel.findById(itemId);
    if (!productData) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    if (productData.stock <= 0) {
      return res.status(400).json({ success: false, message: "Product out of stock" });
    }

    let cartData = userData.cartData || {};

    if (!cartData[itemId]) {
      cartData[itemId] = 1;
    } else {
      cartData[itemId] += 1;
    }

    productData.stock -= 1;
    await productData.save();

    const updatedUserData = await user.findByIdAndUpdate(
      userId,
      { cartData },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Your item added to the cart",
      data: updatedUserData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Your item could not be added to the cart",
    });
  }
};

exports.removeuserCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    if (!userId || !itemId) {
      return res.status(400).json({ success: false, message: "userId and itemId are required" });
    }

    let userData = await user.findById(userId);
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    let cartData = userData.cartData || {};
    if (cartData[itemId] > 0) {
      cartData[itemId] -= 1;

      let productData = await productModel.findById(itemId);

      if (productData) {
        productData.stock += 1;
        await productData.save();
      }

      if (cartData[itemId] === 0) {
        delete cartData[itemId];
      }

      const updatedUserData = await user.findByIdAndUpdate(userId, { cartData }, { new: true });

      return res.status(200).json({
        success: true,
        message: "Your item removed from the cart",
        data: updatedUserData,
      });
    } else {
      return res.status(400).json({ success: false, message: "Item not in cart" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Your item could not be removed from the cart",
    });
  }
};

exports.getuserCart = async (req, res) => {
  try {
    let userData = await user.findById(req.body.userId);

    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    let cartData = userData.cartData;

    res.status(200).json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Can't fetch the data" });
  }
};
