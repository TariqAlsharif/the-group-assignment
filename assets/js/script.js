$(document).ready(function () {

    $(function () {
        var colors = [
            "#FDEBD0",
            "#FDEBD0",
            "#FDEBD0",
            "#FCE1BA",
            "#FBDCB0",
            "#FAD8A5",
            "#FAD39B",
            "#F9D08F",
            "#F9D08F",
            "#F9CB85",
            "#91C9A5",
            "#8AC6EF",
            "#92C9F0",
            "#9ACDF1",
            "#A3D2F2",
            "#ACD6F3",
            "#B5DAF4",
            "#BDDEF5",
            "#C5E2F6",
            "#CEE5F7",
        ];

        for (var i = 0; i < 19; i++) {
            if (i < 10) {
                $('#stockTable tbody').append('<tr>' +
                    '<th class="org-cell" scope="row">1</th>' +
                    '<td class="org-cell">100,950</td>' +
                    '<td style="background-color:' + colors[i] + '">5.000</td>' +
                    '</tr>');
            } else {
                $('#stockTable tbody').append('<tr>' +
                    '<th class="blue-cell" scope="row">2</th>' +
                    '<td class="blue-cell">100,950</td>' +
                    '<td style="background-color:' + colors[i] + '">5.000</td>' +
                    '</tr>');
            }

        }
    })

    $(function () {
        for (var i = 0; i < 19; i++) {
            if(i % 2 === 0){
                $('.comp-list-items ul').append('<li class="border-bottom pb-1 my-1">' +
                '<div class="comp-item d-flex justify-content-between align-items-center" >' +
                '<div class="d-flex align-items-center">' +
                '<img src="assets/images/company-icon.png" alt="company logo" width="25">' +
                '<p class="mb-0 mr-2">اسم الشركة</p>' +
                '</div>' +
                '<i class="fa fa-star ml-2" aria-hidden="true"></i>' +
                '</div >' +
                '</li >');
            }else {
                $('.comp-list-items ul').append('<li class="border-bottom pb-1 my-1">' +
                '<div class="comp-item d-flex justify-content-between align-items-center" >' +
                '<div class="d-flex align-items-center">' +
                '<img src="assets/images/company-icon.png" alt="company logo" width="25">' +
                '<p class="mb-0 mr-2">اسم الشركة</p>' +
                '</div>' +
                '<i class="fa fa-star ml-2 purple-txt" aria-hidden="true"></i>' +
                '</div >' +
                '</li >');
            }
            
        }
    })


    console.log('ready done');
})