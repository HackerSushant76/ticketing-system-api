const { Bookmark } = require("../Models/bookmark.model")

const addToBookmarksControl =async( req,res)=>{
    const bookmark = new Bookmark(req.body)
    await bookmark.save()
    res.send("success")
}

const getBookmarksControl =async(req,res)=>{
    const bookmarks = await Bookmark.find()
    res.send(bookmarks)
}

module.exports = {addToBookmarksControl,getBookmarksControl}