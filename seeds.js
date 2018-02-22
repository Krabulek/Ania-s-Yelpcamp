var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    { 
        name: "Night's Rest",
        image: "https://images.unsplash.com/photo-1479741044197-d28c298f8c77?auto=format&fit=crop&w=750&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        description: "Mauris dignissim non est quis placerat. Phasellus dapibus, nunc ac finibus placerat, orci leo ornare neque, ac varius augue turpis quis arcu. Donec aliquam consectetur laoreet. Cras nunc nisi, mollis vel dignissim at, venenatis id ex. Phasellus pretium purus ac lobortis tempus. Quisque faucibus placerat quam id molestie. Donec non urna purus. Ut lacinia arcu risus, eget vestibulum tellus congue eu. Pellentesque eu consequat velit, vitae consectetur metus. Maecenas ultricies facilisis erat quis imperdiet. Praesent pharetra a odio in semper.orbi sed mauris nunc. Ut vestibulum lectus sit amet lectus ullamcorper varius. Ut fermentum volutpat tincidunt. Duis diam lorem, scelerisque condimentum nunc eu, semper commodo leo. Nulla lacus leo, lobortis vitae enim sit amet, gravida volutpat neque. Suspendisse molestie lobortis libero. Quisque ultrices sapien ipsum, ut commodo tortor lobortis sed. Etiam risus magna, tincidunt a interdum nec, iaculis eu ligula."
    },
    { 
        name: "Beautiful View",
        image: "https://images.unsplash.com/photo-1484960055659-a39d25adcb3c?auto=format&fit=crop&w=750&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        description: "Nam imperdiet sollicitudin quam, non egestas diam volutpat et. Curabitur hendrerit luctus lobortis. Duis posuere nunc mauris, ac malesuada nunc rhoncus ac. Nullam feugiat ante lacus, sit amet convallis arcu interdum eget. Curabitur ultricies nunc et nunc blandit, venenatis semper felis porttitor. Aliquam ac mi sit amet nunc auctor blandit nec quis purus. Aliquam et ante vulputate, dapibus urna id, scelerisque ante. Ut efficitur, leo a maximus pellentesque, ex lectus molestie turpis, sed lacinia felis est in nulla. Integer pulvinar elementum ultrices. Maecenas dapibus eu lorem consequat laoreet. Maecenas interdum molestie risus, vel malesuada massa dictum quis. Sed id nunc luctus, dignissim magna nec, laoreet nunc. Nunc gravida rutrum justo, quis facilisis turpis cursus iaculis. Nam nec odio at est ullamcorper rhoncus."
    },
    { 
        name: "On the Edge of a Mountain",
        image: "https://images.unsplash.com/photo-1503265192943-9d7eea6fc77a?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        description: "estibulum cursus enim a elementum fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean gravida purus non placerat lacinia. Vivamus tincidunt purus ac lacus rhoncus malesuada. Curabitur elementum tempor odio vel scelerisque. Cras at mauris at ipsum tincidunt aliquet. Nam laoreet sagittis sem, sit amet rutrum libero tincidunt sed. Nulla auctor nisi at euismod condimentum. Vestibulum egestas, enim id ullamcorper tincidunt, lacus leo pretium augue, at egestas elit sapien eu arcu. Vestibulum lorem dui, pulvinar quis mauris et, rutrum sodales nisl. Ut vel libero vitae tortor vehicula tristique id eget leo."
    },
];

function seedDB(){
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("campgrounds removed");
            //add a few campgrounds
            /*data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("added a campground");
                    }
                });
            });*/
        }
    });
}

module.exports = seedDB;
