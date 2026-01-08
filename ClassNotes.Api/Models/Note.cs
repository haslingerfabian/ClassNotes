namespace ClassNotes.Api.Models
{
    public class Note
    {
        public int Id { get; set; }
        public string Text { get; set; } = string.Empty;
        public DateTime CreatedAd { get; set; } = DateTime.UtcNow;
    }
}
