module.exports = (sequelize, DataTypes) => {
  const validation = {
    notEmpty: true,
  };

  const Contact = sequelize.define("Contact", {
    id: {
      type: DataTypes.UUID, // or any other type that suits your needs
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4, // or any other default value or strategy
    },
    contact_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: validation,
    },

    contact_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: validation,
    },

    contact_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: validation,
    },

    isActive: {
      type: DataTypes.BOOLEAN, // Assuming isActive is a boolean field
      allowNull: false,
      defaultValue: true, // You can set a default value as needed
    },
  });

  Contact.associate = (models) => {
    // Define a one-to-many relationship
    Contact.belongsTo(models.User, {
      foreignKey: "userId", // This is the foreign key in the Contact model
    });
  };

  return Contact;
};
