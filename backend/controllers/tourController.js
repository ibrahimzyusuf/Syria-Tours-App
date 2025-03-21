import Tour from '../models/Tour.js'

//create new tour
export const createTour = async (req, res) => {
    const newTour = new Tour(req.body);
    try {
        const savedTour = await newTour.save()
        res.status(200).json({ success: true, message: "Successfully created", data: savedTour, });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to create. Try again" });
    }
};

//update tour
export const updateTour = async (req, res) => {
    const id = req.params.id
    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true })
        res.status(200).json({ success: true, message: "Successfully updated", data: updatedTour, });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Failed to update"
        });
    }
};

//delete tour
export const deleteTour = async (req, res) => {
    const id = req.params.id
    try {
        await Tour.findByIdAndDelete(id);
        res.status(200).json({success: true,message: "Successfully deleted"});
    } catch (err) {
        res.status(500).json({success: false,message: "Failed to delete"});
    }
};

//get Single tour
export const getSingleTour = async (req, res) => {
    const id = req.params.id
    try {
        const tour = await Tour.findById(id).populate("reviews")
        res.status(200).json({
            success: true,
            message: "Successful",
            data: tour,
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: "not found",
        });
    }
};

//getAll tour
export const getAllTours = async (req, res) => {
    //for pagination
    const page = parseInt(req.query.page);

    try {
        const tours = await Tour.find({}).populate("reviews")
            .skip(page * 12)
            .limit(12)
        res.status(200).json({
            success: true,
            count: tours.length,
            message: "Successful",
            data: tours
        });
    } catch (err) {
        {
            res.status(404).json({
                success: false,
                message: "not found",
            });
        }
    }
};

//get tour by search
export const getTourBySearch = async (req, res) => {

    const { title, city, sort } = req.query;

    try {
        const query = {};
        if (title) query.title = { $regex: title, $options: 'i' }; // Case-insensitive search for title
        if (city) query.city = { $regex: city, $options: 'i' };
        if (sort) query.sort = { $regex: sort, $options: 'i' };

        const tours = await Tour.find(query).populate("reviews")

        res.status(200).json({
            success: true,
            message: "successful",
            data: tours,
        });

    } catch (err) {
        res.status(404).json({
            success: false,
            message: "not found",
        });
    }
};

//get featured tour
export const getFeaturedTours = async (req, res) => {
    try {
        const tours = await Tour.find({ featured: true }).populate("reviews")
            .limit(60);

        res.status(200).json({
            success: true,
            count:tours.length,
            message: "Successful",
            data: tours
        });
    } catch (err) {
        {
            res.status(404).json({
                success: false,
                message: "not found",
            });
        }
    }
};

//get tour counts
export const getTourCount = async (req, res) => {
    try {
        const tourCount = await Tour.estimatedDocumentCount();
        res.status(200).json({ success: true, data: tourCount });
    } catch (err) {
        res.status(500).json({ success: false, message: "failed to fetch" });
    }
};