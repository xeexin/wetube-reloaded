
export const trending = (req,res) => res.send("Home page videos");

export const see = (req, res) => {
    return res.send(`Watch video #${req.params.id}`);
};

export const edit = (req,res) => res.send("Edit viedo");

export const search = (req, res) => res.send("Search Video");

export const upload = (req, res) => res.send("Upload video");

export const deleteVideo = (req,res) => {
    return res.send("Delete Video");
} ;