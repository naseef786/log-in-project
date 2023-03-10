const bcrypt = require("bcrypt");
const db = require("../model/server");


const loginpageView = (req, res) => {
  console.log(req.session.loginuser);

  if (req.session.loginuser) {
    console.log("HomeReached");
    res.redirect("/userhome");
  } else {
    console.log("else-session");
    res.render("login", { message: req.session.loginerror });
  }

  req.session.loginerror = false;
};

const postlogin = async (req, res) => {
  const { email, password } = req.body;

  let user = await db.get().collection("userdetails").findOne({ email });

  console.log(user);

  if (user) {
    bcrypt.compare(password, user.password, (err, data) => {
      if (err) {
        console.log(err);
      } else if (data) {
        console.log("login user succesfull");

        req.session.loginuser = true;
        res.redirect("/userhome");
      } else {
        req.session.loginerror = true;

        console.log("password wrong");
        res.redirect("/");
      }
    });
  } else {
    console.log("wrong user");
    req.session.loginerror = true;
    console.log("wrong user");
    res.redirect("/");
  }
};

const signupView = (req, res) => {
  if (req.session.loginuser) {
    res.redirect("/");
  } else {
    res.render("signup");
  }
};

let toy = [
  {
    Name: "POCO M4 Pro",
    Company: "XIOMI",
    Price: "13999/-",
    Stock: "Available",
    img: "https://rukminim1.flixcart.com/image/312/312/l0igvww0/mobile/6/8/o/-original-imagcafj5zcxz9wg.jpeg?q=70",
  },
  {
    Name: "POCO C31",
    Company: "XIOMI",
    Price: "11999/-",
    Stock: "Available",
    img: "https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/p/e/4/c31-mzb0a0jin-poco-original-imag7bzqxgdhgf2n.jpeg?q=70",
  },
  {
    Name: "MOTOROLA e40",
    Company: "MOTOROLA",
    Price: "8999/-",
    Stock: "Available",
    img: "https://rukminim1.flixcart.com/image/312/312/l1l1rww0/mobile/v/7/n/-original-imagd48zkjwujxzz.jpeg?q=70",
  },
  {
    Name: "REDMI 10",
    Company: " XIOMI",
    Price: " 9999/-",
    Stock: "Available",
    img: "https://rukminim1.flixcart.com/image/312/312/ku04o7k0/mobile/x/x/t/9i-sport-mzb0a10in-redmi-original-imag785rwf3q8sft.jpeg?q=70",
  },
  {
    Name: "INFINIX HOT 11S",
    Company: "INFINIX",
    Price: "7999/-",
    Stock: "Available",
    img: "https://rukminim1.flixcart.com/image/312/312/ktn9pjk0/mobile/k/r/a/hot-11s-x6812-64-4-infinix-original-imag6xq6wa6ptgex.jpeg?q=70",
  },
  {
    Name: "SAMSUNG F22",
    Company: "SAMSUNG",
    Price: "13999/-",
    Stock: "Available",
    img: "https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/p/e/4/c31-mzb0a0jin-poco-original-imag7bzqxgdhgf2n.jpeg?q=70",
  },
  {
    Name: "REALME C35",
    Company: "REALME",
    Price: "12999/-",
    Stock: "Available",
    img: "https://rukminim1.flixcart.com/image/312/312/l0fm07k0/mobile/y/g/i/-original-imagc7ryyhrrcgxh.jpeg?q=70",
  },
  {
    Name: "REDMI A1",
    Company: "XIOMI",
    Price: "6999/-",
    Stock: "Available",
    img: "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/f/c/-original-imagkjwrwzztvye6.jpeg?q=70",
  },
  {
    Name: "POCO M4 Pro",
    Company: "XIOMI",
    Price: "13999/-",
    Stock: "Available",
    img: "https://rukminim1.flixcart.com/image/312/312/l0igvww0/mobile/6/8/o/-original-imagcafj5zcxz9wg.jpeg?q=70",
  },
  {
    Name: "POCO C31",
    Company: "XIOMI",
    Price: "11999/-",
    Stock: "Available",
    img: "https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/p/e/4/c31-mzb0a0jin-poco-original-imag7bzqxgdhgf2n.jpeg?q=70",
  },
  {
    Name: "MOTOROLA e40",
    Company: "MOTOROLA",
    Price: "8999/-",
    Stock: "Available",
    img: "https://rukminim1.flixcart.com/image/312/312/l1l1rww0/mobile/v/7/n/-original-imagd48zkjwujxzz.jpeg?q=70",
  },
  {
    Name: "REDMI 10",
    Company: " XIOMI",
    Price: " 9999/-",
    Stock: "Available",
    img: "https://rukminim1.flixcart.com/image/312/312/ku04o7k0/mobile/x/x/t/9i-sport-mzb0a10in-redmi-original-imag785rwf3q8sft.jpeg?q=70",
  },
  {
    Name: "INFINIX HOT 11S",
    Company: "INFINIX",
    Price: "7999/-",
    Stock: "Available",
    img: "https://rukminim1.flixcart.com/image/312/312/ktn9pjk0/mobile/k/r/a/hot-11s-x6812-64-4-infinix-original-imag6xq6wa6ptgex.jpeg?q=70",
  },
  {
    Name: "SAMSUNG F22",
    Company: "SAMSUNG",
    Price: "13999/-",
    Stock: "Available",
    img: "https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/p/e/4/c31-mzb0a0jin-poco-original-imag7bzqxgdhgf2n.jpeg?q=70",
  },
  {
    Name: "REALME C35",
    Company: "REALME",
    Price: "12999/-",
    Stock: "Available",
    img: "https://rukminim1.flixcart.com/image/312/312/l0fm07k0/mobile/y/g/i/-original-imagc7ryyhrrcgxh.jpeg?q=70",
  },
  {
    Name: "REDMI A1",
    Company: "XIOMI",
    Price: "6999/-",
    Stock: "Available",
    img: "https://rukminim1.flixcart.com/image/312/312/xif0q/mobile/9/f/c/-original-imagkjwrwzztvye6.jpeg?q=70",
  },
];

const homepageView = (req, res) => {
  console.log("home-session");
  if (req.session.loginuser) {
    res.render("userhome", { toy });
  } else res.redirect("/");
};

// const adduserStatus = require('adduserStatus');

const postuserview = async (req, res) => {
  let name = req.body.username;
  let email = req.body.emailaddress;
  let hashedpassword = await bcrypt.hash(req.body.password, 10);
  let hashedconfirmpassword = await bcrypt.hash(req.body.conpassword, 10);

  console.log("register");

  let data = {
    name: name,
    email: email,
    password: hashedpassword,
    confirmpassword: hashedconfirmpassword,
  };

  db.get()
    .collection("userdetails")
    .insertOne(data, (err, collection) => {
      console.log(req.body);
      if (err) throw err;

      console.log("insertion");
    });
  res.redirect("/");
};

const logout = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};

module.exports = {
  loginpageView,
  homepageView,
  signupView,
  postuserview,
  postlogin,
  logout,
};

// const Router = express.Router();













