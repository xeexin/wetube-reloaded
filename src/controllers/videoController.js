
export const trending = (req, res) => {
    const videos = [
        {
            title: "HELLO"
        },
        {
            title: "Video 2"
        },
        {
            title:"Whatsup"
        }
    ];

    return res.render("home", {pageTitle: "Home", videos});
};

export const see = (req, res) => res.render("watch",{ pageTitle: "Watch" });

export const edit = (req,res) => res.render("edit", {pageTitle: "Edit"});

export const search = (req, res) => res.send("Search Video");

export const upload = (req, res) => res.send("Upload video");

export const deleteVideo = (req,res) => {
    return res.send("Delete Video");
} ;