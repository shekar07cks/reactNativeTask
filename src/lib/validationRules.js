const validationRules = {
    email: {
      presence: {
        message: "^Please enter valid email",
      },
      email: {
        message: "^Please enter valid email",
      },
    },

    password: {
      presence: {
        message: "^Please enter a password",
      },
      length: {
        minimum: 4,
        message: "^Your password must be at least 4 characters",
      },
    },
    name: {
      format: {
        pattern: "^[A-Za-z]+([\ A-Za-z]+)*",
        message: "^Please enter a valid name",
      },
      presence: {
        message: "^Please enter a valid name",
      },
      length: {
        minimum: 2,
        message: "^Please enter a valid name",
      },
    },
    phone: {
      // format: {
      //   pattern: "[7-9][0-9]{9}",
      //   message: "^Please enter a valid phone number",
      // },
      presence: {
        message: "^Please enter a valid phone number",
      },
      length: {
        minimum: 9,
        maximum:10,
        message: "^Please enter a valid phone number",
      },
    },
    phoneMal: {
        // format: {
        //     pattern: "[0-9]{7,8}",
        //     message: "^Please enter a valid phone number",
        //   },
      presence: {
        message: "^Please enter a valid phone number",
      },
      length: {
        minimum: 9,
        message: "^Please enter a valid phone number",
      },
    },
    phonePak: {
      presence: {
        message: "^Please enter a valid phone number",
      },
      length: {
        minimum: 7,
        message: "^Please enter a valid phone number",
      },
    },
    licenceNo: {
        // format: {
        //     pattern: "[0-9a-zA-Z]",
        //     message: "^Please enter a valid licence number",
        //   },
        presence: {
          message: "^Please enter a valid licence number",
        },
        length: {
          minimum: 9,
          message: "^Please enter a 9digit licence number",
        },
      },
      number: {
        presence: {
          message: "^Please enter a valid  number",
        },
        length: {
          minimum: 4,
          message: "^Please enter a valid  number",
        },
      },
      accountNo: {
        presence: {
          message: "^Please enter a valid account number",
        },
        length: {
          minimum: 10,
          message: "^Please enter a valid account number",
        },
      },
      pan: {
           format: {
            pattern: "[A-Z]{5}[0-9]{4}[A-Z]{1}",
            message: "^Please enter a valid pan number",
          },
        presence: {
          message: "^Please enter a valid pan number",
        },
        length: {
          minimum: 10,
          message: "^Please enter a valid pan number",
        },
      },

  };

  export default validationRules;
