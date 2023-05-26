module.exports = (plugin) => {
  plugin.controllers.user.requestUpgrade = async (ctx) => {
    const { id } = ctx.state.user;
    const res = await strapi.entityService.update(
      "plugin::users-permissions.user",
      id,
      { data: { accUpgradeRequested: true } }
    );
    return { success: true };
  };

  plugin.routes["content-api"].routes.push({
    method: "POST",
    path: "/request-upgrade",
    handler: "user.requestUpgrade",
  });

  return plugin;
};
