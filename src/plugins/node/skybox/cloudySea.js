/**
 * Cloudy skybox node type, with clouds reflected in a calm sea
 *
 *  @author xeographics / http://xeographics.com
 *
 * Usage example:
 *
 * someNode.addNode({
 *      type: "skybox/cloudySea"
 *  });
 */
SceneJS.Types.addType("skybox/cloudySea", {
    construct:function (params) {

        // Wraps a 'custom' skybox node type, passing in a cloudySea texture
        this.addNode({
            type:"skybox",
            src:SceneJS.getConfigs("pluginPath") + "/node/skybox/textures/cloudySea.jpg"
        })
    }
});
