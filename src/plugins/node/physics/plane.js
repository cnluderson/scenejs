/**
 * Planar physics body
 *
 * @author xeographics / http://xeographics.com
 *
 * <p>Documentation at: http://xeographics.com/articles/scenejs-physics/</p>
 */
SceneJS.Types.addType("physics/plane", {
    construct:function (params) {

        this.addNode({
            type:"physics/body",
            shape:"plane",
            pos:params.pos,
            dir:params.dir,
            mass:params.mass,
            restitution:params.restitution,
            friction:params.friction,
            velocity:params.velocity,
            movable:params.movable,

            nodes:[
                {
                    type:"scale",
                    x:1000,
                    y:.5,
                    z:1000,
                    nodes:[
                        {
                            type:"rotate",
                            x:1,
                            angle:90,
                            nodes:[
                                {
                                    type:"geometry/plane",
                                    wire:params.wire,
                                    xSegments:params.xSegments || 100,
                                    zSegments:params.zSegments || 100
                                }
                            ]
                        }
                    ]
                }
            ]
        });
    }
});

