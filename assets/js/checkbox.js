    "use strict";
    
    let updateChkbx = function(chkbxGroup, chkbxChecked, defaultID, validID, invalidID) { 
        if (chkbxChecked.length === 0) {
            $("#" + invalidID).addClass("hidden").removeClass("visible");
            $("#" + validID).addClass("hidden").removeClass("visible");
            $("#" + defaultID).removeClass("hidden").addClass("visible");
        } else if (chkbxGroup.length === chkbxChecked.length) {
            $("#" + defaultID).addClass("hidden").removeClass("visible");
            $("#" + invalidID).addClass("hidden").removeClass("visible");
            $("#" + validID).removeClass("hidden").addClass("visible");
        } else {
            $("#" + defaultID).addClass("hidden").removeClass("visible");
            $("#" + validID).addClass("hidden").removeClass("visible");
            $("#" + invalidID).removeClass("hidden").addClass("visible");
        }
    },
    updateChkbxList = function () {
        updateChkbx($(":input[type=checkbox][name=action-checkbox]"), $(":input[type=checkbox][name=action-checkbox]:checked"), "action-all-default-msg", "action-all-qualify-msg", "action-all-not-qualify-msg");
    }, 
    updatePartChkbxList = function () {
        updateChkbx($(":input[type=checkbox][name=action-checkbox][value=true]"), $(":input[type=checkbox][name=action-checkbox][value=true]:checked"), "action-default-msg", "action-qualify-msg", "action-not-qualify-msg");
    };
    
    window.onload = function () {
        updateChkbxList();
        updatePartChkbxList();
    }

    $(":input[type=checkbox][name=action-checkbox]").change(updateChkbxList);
    $(":input[type=checkbox][name=action-checkbox][value=true]").change(updatePartChkbxList);
