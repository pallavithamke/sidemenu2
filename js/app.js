/**
 * Created by pallavi on 3/22/2017.
 */

var app = angular.module("myapp",[ 'ui.router','ngMaterial']);
app.config(['$stateProvider', '$urlRouterProvider','$mdIconProvider', function($stateProvider, $urlRouterProvider,$mdIconProvider){
    $urlRouterProvider.otherwise('/index');

    $stateProvider
        .state('index', {
            url: 'index',
            templateUrl: 'index.html',
            controller: 'indexCtrl'
        })
        .state('index.Menu1', {
            url: '/Menu1',
            templateUrl: 'Views/Menu1.html',
            controller: 'Menu1Ctrl'
        })
        .state('index.Menu2', {
            url: '/Menu2',
            templateUrl: 'Views/Menu2.html',
            controller: 'Menu2Ctrl'
        })
        .state('Menu3.Menu3', {
            url: '/Menu3',
            templateUrl: 'Views/Menu3.html',
            controller: 'Menu3Ctrl'
        })
        .state('Menu4.Menu4', {
            url: '/Menu4',
            templateUrl: 'Views/Menu4.html',
            controller: 'Menu4Ctrl'
        })
        .state('Menu5.Menu5', {
            url: '/Menu5',
            templateUrl: 'Views/Menu5.html',
            controller: 'Menu5Ctrl'
        })
        .state('Menu6.Menu6', {
            url: '/Menu6',
            templateUrl: 'Views/Menu6.html',
            controller: 'Menu6Ctrl'
        });
    $mdIconProvider
        .iconSet('social', 'svg/social-icons.svg', 24)
        .iconSet('action', 'svg/action-icons.svg', 24)
        .iconSet('file', 'svg/file-icons.svg', 24)
        .iconSet('hardware', 'svg/hardware-icons.svg', 24)
        .iconSet('navigation', 'svg/navigation-icons.svg', 24)
        .iconSet('alert', 'svg/alert-icons.svg', 24)
        .iconSet('content', 'svg/content-icons.svg', 24)
        .iconSet('editor', 'svg/editor-icons.svg', 24)
        .defaultIconSet("svg/mdi.svg", 24);
}]);
app.controller('indexCtrl', function($scope,$mdSidenav) {
       debugger;

        $scope.subMenuList = [

        {
            "menuName" : "Menu1",
            "menuIcon" : "social:person_add",
            "menuLink" : "Menu1",

            "defaultPage"  : "index.Menu1"
        },

        {
            "menuName" : "Menu2",
            "menuIcon" : "social:person",
            "menuLink" : ".master",

            "defaultPage"  : "home.master"
        },

        {
            "menuName" : "Menu3",
            "menuIcon" : "hardware:keyboard",
            "menuLink" : ".data_entry",

            "defaultPage"  : "home.data_entry"
        },

        {
            "menuName" : "Menu4",
            "menuIcon" : "content:report",
            "menuLink" : ".report",

            "defaultPage"  : "home.report"
        },

        {
            "menuName" : "Menu5",
            "menuIcon" : "action:build",
            "menuLink" : ".settings",

            "defaultPage"  : "home.settings"
        },

        {
            "menuName" : "Menu6",
            "menuIcon" : "help",
            "menuLink" : ".help",

            "defaultPage"  : "home.help.about"
        }
    ];
       window.onresize = function() {
           if(window.innerWidth > 749){
               document.getElementById("projectMenue").style.height =  window.innerHeight -36 + 'px';
               document.getElementById("projectSubMenue").style.height =  window.innerHeight -36 + 'px';
               document.getElementById("projectBody").style.height =  window.innerHeight -112 + 'px';
           }
       };
       window.onresize();
});
   app.controller('Menu1Ctrl',function ($scope) {
       debugger;
       $scope.subMenuList11= [
           {
               "subMenuName" : "SubMenu1",
               "subMenuParentName" : "Menu1",
               "subMenuIcon" : ".Menu1",

           }
       ];
       $state.go("index.Menu1");
       $scope.selectedMenu = "index.Menu1";




       /** Default load page on click **/
       $scope.loadDefaultPage =  function(stateToLoad){
           debugger;
           $state.go(stateToLoad);
           $scope.selectedMenu = stateToLoad;
       };


});
   app.controller('Menu2Ctrl',function ($scope) {
       $scope.masterSubmenuList = [
           {
               "subMenuName" : "SubMenu1",
               "subMenuParentName" : "Menu2",
               "subMenuIcon" : "file",
               "subMenuLink" : ".tax"
           },

           {
               "subMenuName" : "SubMenu2",
               "subMenuParentName" : "Menu2",
               "subMenuIcon" : "file",
               "subMenuLink" : ".main_ac"
           },

           {
               "subMenuName" : "SubMenu3",
               "subMenuParentName" : "Menu2",
               "subMenuIcon" : "file",
               "subMenuLink" : ".sub_ac"
           },

           {
               "subMenuName" : "SubMenu4",
               "subMenuParentName" : "Menu2",
               "subMenuIcon" : "file",
               "subMenuLink" : ".prod_group"
           },

           {
               "subMenuName" : "SubMenu5",
               "subMenuParentName" : "Menu2",
               "subMenuIcon" : "file",
               "subMenuLink" : ".product"
           },

           {
               "subMenuName" : "SubMenu6",
               "subMenuParentName" : "Menu2",
               "subMenuIcon" : "file",
               "subMenuLink" : ".opening_stock"
           },

           {
               "subMenuName" : "SubMenu7",
               "subMenuParentName" : "Menu2",
               "subMenuIcon" : "file",
               "subMenuLink" : ".area"
           },

           {
               "subMenuName" : "SubMenu8",
               "subMenuParentName" : "Menu2",
               "subMenuIcon" : "file",
               "subMenuLink" : ".sales_man"
           },

           {
               "subMenuName" : "SubMenu9",
               "subMenuParentName" : "Menu2",
               "subMenuIcon" : "file",
               "subMenuLink" : ".van"
           },

           {
               "subMenuName" : "SubMenu10",
               "subMenuParentName" : "Menu2",
               "subMenuIcon" : "file",
               "subMenuLink" : ".display"
           },

           {
               "subMenuName" : "SubMenu11",
               "subMenuParentName" : "Menu2",
               "subMenuIcon" : "file",
               "subMenuLink" : ".remark"
           },

           {
               "subMenuName" : "SubMenu12",
               "subMenuParentName" : "Menu2",
               "subMenuIcon" : "file",
               "subMenuLink" : ".tax_type"
           }
       ];
       $scope.loadDefaultPage =  function(stateToLoad){
           debugger;
           $state.go(stateToLoad);
           $scope.selectedMenu = stateToLoad;
       };

});
   app.controller('Menu3Ctrl',function ($scope) {
       $scope.dataEntrySubmenuList = [
           {
               "subMenuName" : "Purchase",
               "subMenuParentName" : "Data Entry",
               "subMenuIcon" : "file",
               "subMenuLink" : ".purchase"
           },

           {
               "subMenuName" : "Sales",
               "subMenuParentName" : "Data Entry",
               "subMenuIcon" : "file",
               "subMenuLink" : ".sales"
           },

           {
               "subMenuName" : "Delivery Challan",
               "subMenuParentName" : "Data Entry",
               "subMenuIcon" : "file",
               "subMenuLink" : ".d_challan"
           },

           {
               "subMenuName" : "Purchase Order",
               "subMenuParentName" : "Data Entry",
               "subMenuIcon" : "file",
               "subMenuLink" : ".purchase_order"
           },

           {
               "subMenuName" : "Sales Order",
               "subMenuParentName" : "Data Entry",
               "subMenuIcon" : "file",
               "subMenuLink" : ".sales_order"
           },

           {
               "subMenuName" : "Bank Deposite",
               "subMenuParentName" : "Data Entry",
               "subMenuIcon" : "file",
               "subMenuLink" : ".bank_deposit"
           },

           {
               "subMenuName" : "Bank Withdrawal",
               "subMenuParentName" : "Data Entry",
               "subMenuIcon" : "file",
               "subMenuLink" : ".bank_withdrawal"
           },

           {
               "subMenuName" : "Cash Received",
               "subMenuParentName" : "Data Entry",
               "subMenuIcon" : "file",
               "subMenuLink" : ".cash_received"
           },

           {
               "subMenuName" : "Cash Payment",
               "subMenuParentName" : "Data Entry",
               "subMenuIcon" : "file",
               "subMenuLink" : ".cash_payment"
           },

           {
               "subMenuName" : "Journal Voucher",
               "subMenuParentName" : "Data Entry",
               "subMenuIcon" : "file",
               "subMenuLink" : ".journal_vouter"
           },

           {
               "subMenuName" : "Credit Note",
               "subMenuParentName" : "Data Entry",
               "subMenuIcon" : "file",
               "subMenuLink" : ".credit_note"
           },

           {
               "subMenuName" : "Debit Note",
               "subMenuParentName" : "Data Entry",
               "subMenuIcon" : "file",
               "subMenuLink" : ".debit_note"
           },

           {
               "subMenuName" : "Stock Adjustment",
               "subMenuParentName" : "Data Entry",
               "subMenuIcon" : "file",
               "subMenuLink" : ".stock_adjustment"
           },

           {
               "subMenuName" : "Collection Against Sales Invoice",
               "subMenuParentName" : "Data Entry",
               "subMenuIcon" : "file",
               "subMenuLink" : ".collection_against_sale_invoice"
           },

           {
               "subMenuName" : "Payment to Supplier",
               "subMenuParentName" : "Data Entry",
               "subMenuIcon" : "file",
               "subMenuLink" : ".payment_to_supplier"
           },

           {
               "subMenuName" : "Cheque Return",
               "subMenuParentName" : "Data Entry",
               "subMenuIcon" : "file",
               "subMenuLink" : ".cheque_return"
           }
       ];

});
   app.controller('Menu4Ctrl',function ($scope) {

       $scope.reportSubmenuList = [
           {
               "subMenuName" : "Sales",
               "subMenuParentName" : "Report",
               "subMenuIcon" : "file",
               "subMenuLink" : ".sale"
           },

           {
               "subMenuName" : "Purchase",
               "subMenuParentName" : "Report",
               "subMenuIcon" : "file",
               "subMenuLink" : ".purchase"
           },

           {
               "subMenuName" : "Delivery Challan (Sales)",
               "subMenuParentName" : "Report",
               "subMenuIcon" : "file",
               "subMenuLink" : ".delivery_challan"
           },

           {
               "subMenuName" : "Sales Order",
               "subMenuParentName" : "Report",
               "subMenuIcon" : "file",
               "subMenuLink" : ".sale_order"
           },

           {
               "subMenuName" : "Stock",
               "subMenuParentName" : "Report",
               "subMenuIcon" : "file",
               "subMenuLink" : ".stock"
           },

           {
               "subMenuName" : "Outstanding",
               "subMenuParentName" : "Report",
               "subMenuIcon" : "file",
               "subMenuLink" : ".outstanding"
           },

           {
               "subMenuName" : "VAT",
               "subMenuParentName" : "Report",
               "subMenuIcon" : "file",
               "subMenuLink" : ".vat"
           },

           {
               "subMenuName" : "Product",

               "subMenuParentName" : "Report",
               "subMenuIcon" : "file",
               "subMenuLink" : ".product"
           },

           {
               "subMenuName" : "Party",
               "subMenuParentName" : "Report",
               "subMenuIcon" : "file",
               "subMenuLink" : ".party"
           },

           {
               "subMenuName" : "Master List",
               "subMenuParentName" : "Report",
               "subMenuIcon" : "file",
               "subMenuLink" : ".master_list"
           },

           {
               "subMenuName" : "Scheme",
               "subMenuParentName" : "Report",
               "subMenuIcon" : "file",
               "subMenuLink" : ".scheme"
           },

           {
               "subMenuName" : "Final Report",
               "subMenuParentName" : "Report",
               "subMenuIcon" : "file",
               "subMenuLink" : ".final_report"
           },

           {
               "subMenuName" : "Other Report",
               "subMenuParentName" : "Report",
               "subMenuIcon" : "file",
               "subMenuLink" : ".other_report"
           },

           {
               "subMenuName" : "Sales Profit",
               "subMenuParentName" : "Report",
               "subMenuIcon" : "file",
               "subMenuLink" : ".sales_profit"
           },

           {
               "subMenuName" : "Invoice Printing",
               "subMenuParentName" : "Report",
               "subMenuIcon" : "file",
               "subMenuLink" : ".invoice_printing"
           },

           {
               "subMenuName" : "Db/Cr Note",
               "subMenuParentName" : "Report",
               "subMenuIcon" : "file",
               "subMenuLink" : ".db_cr_note"
           },

           {
               "subMenuName" : "Print Case Memo",
               "subMenuParentName" : "Report",
               "subMenuIcon" : "file",
               "subMenuLink" : ".print_case_memo"
           }
       ];
});
   app.controller('Menu5Ctrl',function ($scope) {
       $scope.toolSubmenuList = [
           {
               "subMenuName" : "Set Invoice No",
               "subMenuParentName" : "Settings",
               "subMenuIcon" : "file",
               "subMenuLink" : ".set_invoice_no"
           },

           {
               "subMenuName" : "Stock Correction",
               "subMenuParentName" : "Settings",
               "subMenuIcon" : "file",
               "subMenuLink" : ".stock_correction"
           },

           {
               "subMenuName" : "Backup",
               "subMenuParentName" : "Settings",
               "subMenuIcon" : "file",
               "subMenuLink" : ".backup"
           },

           {
               "subMenuName" : "Restore",
               "subMenuParentName" : "Settings",
               "subMenuIcon" : "file",
               "subMenuLink" : ".restore"
           },

           {
               "subMenuName" : "Message",
               "subMenuParentName" : "Settings",
               "subMenuIcon" : "file",
               "subMenuLink" : ".message"
           },
           {
               "subMenuName" : "User",
               "subMenuParentName" : "Settings",
               "subMenuIcon" : "file",
               "subMenuLink" : ".register"
           }



       ];

});
   app.controller('Menu6Ctrl',function ($scope) {

       $scope.helpSubmenuList = [
           {
               "subMenuName" : "About",
               "subMenuParentName" : "Help",
               "subMenuIcon" : "file",
               "subMenuLink" : ".about"
           }


       ];
   });
