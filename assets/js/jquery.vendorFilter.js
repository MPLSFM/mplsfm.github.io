$(document).ready(function(){$("a.filter-all").on("click",function(){$(".vendor-card-wrapper").show(),$("#mobile-dropdown-btn-text").text("View: All Vendors"),$(".dropdown1").hide()}),$("a.filter-produce").on("click",function(){$(".vendor-card-wrapper.produce").show(),$(".vendor-card-wrapper").not(".produce").hide(),$("#mobile-dropdown-btn-text").text("View: Produce"),$(".dropdown1").hide()}),$("a.filter-farmstead").on("click",function(){$(".vendor-card-wrapper.farmstead").show(),$(".vendor-card-wrapper").not(".farmstead").hide(),$("#mobile-dropdown-btn-text").text("View: Eggs, Meat & Artisanal"),$(".dropdown1").hide()}),$("a.filter-flowers").on("click",function(){$(".vendor-card-wrapper.flowers").show(),$(".vendor-card-wrapper").not(".flowers").hide(),$("#mobile-dropdown-btn-text").text("View: Flowers & Plants"),$(".dropdown1").hide()}),$("a.filter-readytoeat").on("click",function(){$(".vendor-card-wrapper.readytoeat").show(),$(".vendor-card-wrapper").not(".readytoeat").hide(),$("#mobile-dropdown-btn-text").text("View: Ready to Eat"),$(".dropdown1").hide()}),$(document).on("click",function(o){$(".dropdown1").hide()}),$(".dropdown1").on("click",function(){$(".dropdown1").hide()}),$("button.dropdown-toggle").on("click",function(){$(".dropdown1").toggle()})});
