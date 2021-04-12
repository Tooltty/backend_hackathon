const client = require("../config/db");

// will be used for a dropdown
exports.getAllIndustries = async (req, res, next) => {
  try {
    const allIndustries = await client.industry.findMany();
    res.status(200).json(allIndustries);
  } catch (err) {
    next(err);
  }
};

exports.GetOneIndustry = async (req, res, next) => {
  try {
    const industryId = Number(req.params.industryId);
    const oneIndustry = await client.industry.findUnique({
      where: { id: industryId },
    });
    res.status(200).json(oneIndustry);
  } catch (err) {
    next(err);
  }
};

exports.AddIndustry = async (req, res, next) => {
  try {
    const { name } = req.body;
    const AddedIndustry = await client.industry.create({
      data: { name },
    });
    res.status(200).json(AddedIndustry);
  } catch (err) {
    next(err);
  }
};
