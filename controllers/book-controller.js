const {BookModel, UserModel} = require("../models")
const {IssuedBook} = require("../dtos/book-dto")

// const getAllBooks = () => {

// }


// const getSingleBookById = () => {
    
// }

// module.export = {
//      getAllbooks, getSingleBookById
// }




// router.get('/', (req, res)=>{
//      res.status(200).json({
//            success: true,
//           data: books
//        })    
//})



exports.getAllBooks = async (req, res) => {
    const books = await BookModel.find();

    if(books.length ===0){
        return res.status.json({
            success: false,
            message: "No books in the system"
        })
    }    

    res.status(200).json({
        success: true,        
        data: books
    })
}


exports.getSingleBookById = async(req, res) => {
    const {id} = res.params;
    const book = await BookModel.findById(id);

    if(!book){
        return res.status(404).json({
            success: false,
            message: `Book with id not found: ${id}`
        })
    }

    res.status(200).json({
        success: true,
        data: book
    })
}

exports.getIssuedBooks = async(req, res) => {
    const issuedBooks = await BookModel.find({
        issuedTo: { $ne: null }
    });

    if(issuedBooks.length === 0){
        return res.status(404).json({
            success: false,
            message: "No books issued yet"
        })
    }

    res.status(200).json({
        success: true,
        data: issuedBooks
    })
}


exports.getAllIssuedBooks = async(req, res) => {
    const users = await UserModel.find({
        issuedBook: {$exists: true}        
    }).populate("issuedBook", "name")

    const issuedBooks = users.map((each) => {
        return new IssuedBook(each);
    });

    if(issuedBooks.length === 0){
        return res.status(404).json({
            success: false,
            message: "No books issued yet"
        })
    }

    res.status(200).json({
        success: true,
        data: issuedBooks
    })
}


exports.addNewBook = async(req, res) => {
    const {data} = req.body;

    if(!data){
        return res.status(400).json({
            success: false,
            message: "No data provided"
        })
    }

    // const book = await BookModel.create(data);

    // res.status(201).json({
    //     success: true,
    //     message: "Book added successfully",
    //     data: book
    // })


    const allBooks =await BookModel.find();
    res.status(200).json({
        success: true,
        message: "All books",
        data: allBooks
    });
}


exports.updateBookById = async(req, res) => {
    const {id} = req.params;
    const {data} = req.body;

    if(!data){
        return res.status(400).json({
            success: false,
            message: "No data provided"
        })
    }

    const book = await BookModel.findByIdAndUpdate(id, data, {new: true});

    res.status(200).json({
        success: true,
        message: "Book updated successfully",
        data: book
    })
}
    
Object.assign(book, data);
await book.save();

res.status(200).json({
    success: true,
    message: "Book updated successfully",
    data: book
})

const updatedBook = await BookModel.findOneAndUpdate(
    {_id: id},
    data,
    {new: true}
);

if(!updatedBook){
    return res.status(404).json({
        success: false,
        message: `Book with id not found: ${id}`
    })
}

res.status(200).json({
    success: true,
    message: "Book updated successfully",
    data: updatedBook
})


exports.deleteBookById = async(req, res) => {
    const {id} = req.params;
    const book = await BookModel.findByIdAndDelete(id);

    if(!book){
        return res.status(404).json({
            success: false,
            message: `Book with id not found: ${id}`
        })
    }

    res.status(200).json({
        success: true,
        message: "Book deleted successfully",
        data: book
    })
}
