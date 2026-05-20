export const getErrorMessage = (e: any): string => {
    let msg = "Erreur lors de l'enregistrement";

    // Check if error is a string
    if (typeof e === 'string') return e;

    const data = e.response?.data;

    // Handle nested validation errors (errors: { field: ["msg"] })
    if (data?.errors) {
        msg = Object.values(data.errors).flat().join(', ');
    }
    // Handle explicit error field (error: "msg")
    else if (data?.error) {
        msg = data.error;
    }
    // Handle status message (message: "msg")
    else if (data?.message) {
        msg = data.message;
    }
    // Handle generic response errors
    else if (e.response?.status === 401) {
        msg = "Non autorisé - veuillez vous reconnecter";
    } else if (e.response?.status === 403) {
        msg = "Accès refusé - vous n'avez pas les droits admin";
    } else if (e.response?.status === 500) {
        msg = "Erreur serveur - vérifiez les logs Laravel";
    } else if (e.message) {
        msg = e.message;
    }

    return msg;
};
