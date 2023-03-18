namespace Server.Models.Support
{
    public class Feedback
    {
        public int Id { get; set; }
        public String Rating{ get; set; }
        public string Comment { get; set; }
        public DateTime CreatedDate { get; set; }
        public int TicketId { get; set; }
        public Ticket Ticket { get; set; }
    }
}