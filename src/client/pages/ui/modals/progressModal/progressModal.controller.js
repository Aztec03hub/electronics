/**
 * Created by n.poltoratsky
 * on 24.06.2016.
 * Modified by Phil LaFayette, 11/15/2017
 */
'use strict';

export default function ProgressModalCtrl($timeout, baProgressModal) {
    'ngInject';

    baProgressModal.setProgress(0);

    (function changeValue() {
        if (baProgressModal.getProgress() >= 100) {
            baProgressModal.close();
        } else {
            baProgressModal.setProgress(baProgressModal.getProgress() + 10);
            $timeout(changeValue, 300); //Was 300
        }
    })();
}
