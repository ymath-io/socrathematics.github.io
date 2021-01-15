var app = new Vue({
el:'#mainDashboard',
    data:{
    activeCourses:[
        {
            name:"Trigonometry",
            progress:50,
            topics:[
                {
                    name:"Identities",
                    progress:30
                },
                {
                    name:"Law of Cosines",
                    progress:70
                }
            ]
        },
        {
            name:"Calculus",
            progress:50,
            topics:[
                {
                    name:"Limits",
                    progress:30
                },
                {
                    name:"Derivatives",
                    progress:70
                }
            ]
        },
        {
            name:"Number Theory",
            progress:50,
            topics:[
                {
                    name:"Sets",
                    progress:98
                },
                {
                    name:"Set Properties",
                    progress:70
                }
            ]
        }
    ]
    },
    mounted(){
        var $draggable = $('.grid-item').draggabilly({
            containment: '.grid',
            gutter:30,
        })
// initialize Packery
        var $grid = $('.grid').packery({
            itemSelector: '.grid-item',
            // columnWidth helps with drop positioning
            columnWidth: 30,
            rowHeight: 30
        });

// make all grid-items draggable
        $grid.find('.grid-item').each( function( i, gridItem ) {
            var draggie = new Draggabilly( gridItem );
            // bind drag events to Packery
            $grid.packery( 'bindDraggabillyEvents', draggie );
        });
    }
})