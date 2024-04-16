function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modeules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '='
        }
    }
}