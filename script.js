function copy() {
    navigator.clipboard.writeText("play.hellnetwork.in").then(() => {
        console.log('Content copied to clipboard');
        /* Resolved - text copied to clipboard successfully */
      },() => {
        console.error('Failed to copy');
        /* Rejected - text failed to copy to the clipboard */
      });

}